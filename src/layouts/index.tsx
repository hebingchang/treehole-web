import {
  ChevronDownIcon,
  ChevronRightIcon,
  CloseIcon,
  HamburgerIcon,
  Icon,
  MoonIcon,
  SunIcon,
} from '@chakra-ui/icons'
import {
  Box,
  Button,
  Collapse,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalContent,
  ModalOverlay,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Spinner,
  Stack,
  Text,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import Cookies from 'js-cookie'
import { OidcClient, UserManagerSettings } from 'oidc-client-ts'
import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import UserCard from '../components/user_card'
// @ts-ignore
import avatar from '../images/avatar.png'
// @ts-ignore
import logo from '../images/logo.png'
import { LoginSource, OAuthLoginChannel } from '../services/auth_pb'
import rpc from '../services/rpc'
import {
  EmptyRequest,
  OAuthConfigRequest,
  OAuthLoginRequest,
} from '../services/treehole_pb'
import { selectUser, setUser } from '../states/credential'
import { useAppDispatch, useAppSelector } from '../states/hooks'
import {
  selectCategories,
  selectFeaturedTags,
  setCategories,
  setFeaturedTags,
} from '../states/site'
import store from '../states/store'
import { getWebSource } from '../utils/env'

const popupCenter = ({
  url,
  title,
  width,
  height,
}: {
  url: string
  title: string
  width: number
  height: number
}) => {
  const left = Math.max(
    0,
    Math.round(window.screenX + (window.outerWidth - width) / 2)
  )
  const top = Math.max(
    0,
    Math.round(window.screenY + (window.outerHeight - height) / 2)
  )
  return window.open(
    url,
    title,
    `
      scrollbars=yes,
      width=${width}, 
      height=${height}, 
      top=${top}, 
      left=${left}
      `
  )
}

const Layout = ({ children, pageContext }: any) => {
  const { isOpen, onToggle } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()
  const [loading, setLoading] = useState(false)
  const [initialized, setInitialized] = useState(false)
  const dispatch = useAppDispatch()
  const user = useAppSelector(selectUser)
  const categories = useAppSelector(selectCategories)
  const featuredTags = useAppSelector(selectFeaturedTags)

  const navItems: Array<NavItem> = [
    {
      label: '时间线',
      href: '#',
    },
    {
      label: '热门',
      href: '#',
    },
    ...featuredTags.map((tag) => ({
      label: tag.name,
      href: '#',
    })),
    {
      label: '版块',
      children: categories.map((c) => ({
        label: c.name,
        href: '#',
      })),
    },
  ]

  const logIn = () => {
    setLoading(true)
    rpc.client
      .getOAuthConfig(
        new OAuthConfigRequest().setChannel(
          OAuthLoginChannel.LOGINWITHJACCOUNT
        ),
        {}
      )
      .then(async (res) => {
        const settings: UserManagerSettings = {
          authority: 'https://jaccount.sjtu.edu.cn/oauth2',
          metadata: {
            authorization_endpoint: res.getAuthorizeUrl(),
          },
          client_id: res.getClientId(),
          scope: res.getScopesList().join(' '),
          redirect_uri: `${process.env.GATSBY_TREEHOLE_HOST}/auth/jaccount`,
          popup_redirect_uri: `${process.env.GATSBY_TREEHOLE_HOST}/auth/jaccount`,
          loadUserInfo: false,
        }
        const client = new OidcClient(settings)
        const request = await client.createSigninRequest({})

        const handleLoginCallback = (e: MessageEvent<any>) => {
          if (e.origin === window.origin) {
            popupWindow && popupWindow.close()
            window.removeEventListener('message', handleLoginCallback, true)
            rpc.client
              .oAuthLogin(
                new OAuthLoginRequest()
                  .setChannel(OAuthLoginChannel.LOGINWITHJACCOUNT)
                  .setSource(LoginSource.LOGINSOURCEWEB)
                  .setWebSource(getWebSource())
                  .setCode(e.data),
                {}
              )
              .then((res) => {
                Cookies.set('treehole_session', res.getToken())
                getProfile().finally(() => setLoading(false))
              })
          }
        }

        window.addEventListener('message', handleLoginCallback, true)

        const popupWindow = popupCenter({
          url: request.url,
          title: '使用 jAccount 登录',
          width: 720,
          height: 480,
        })
      })
  }

  const getProfile = async () => {
    try {
      const res = await rpc.client.getProfile(new EmptyRequest(), {})
      dispatch(setUser(res.toObject()))
      dispatch(
        setCategories(
          (await rpc.client.getAllCategories(new EmptyRequest(), {}))
            .getCategoriesList()
            .map((c) => c.toObject())
        )
      )
      dispatch(
        setFeaturedTags(
          (await rpc.client.getBrowsableTags(new EmptyRequest(), {}))
            .getTagsList()
            .map((t) => t.toObject())
        )
      )
    } catch (e) {
      dispatch(setUser(undefined))
    }
  }

  useEffect(() => {
    console.log('layout load')
    getProfile().finally(() => setInitialized(true))
  }, [])

  if (pageContext.layout === 'auth') {
    return children
  }

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH='60px'
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle='solid'
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align='center'
        justify='center'
      >
        <Flex align='center' flex={1} maxW='container.xl'>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant='ghost'
              aria-label='Toggle Navigation'
            />
          </Flex>
          <Flex
            flex={{ base: 1 }}
            justify={{ base: 'center', md: 'start' }}
            alignItems='center'
          >
            <Box textAlign={useBreakpointValue({ base: 'center', md: 'left' })}>
              <Image src={logo} height={8} width={8} />
            </Box>

            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav navItems={navItems} />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify='flex-end'
            alignItems='center'
            direction='row'
            spacing={6}
          >
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>

            {initialized && !user ? (
              <Button
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize='sm'
                fontWeight={600}
                color='white'
                bg='purple.400'
                _hover={{
                  bg: 'purple.300',
                }}
              >
                登录
              </Button>
            ) : null}
            {!initialized ? <Spinner /> : null}
            {initialized && user ? (
              <Menu>
                <MenuButton w={8}>
                  <Image src={avatar} height={8} width={8} />
                </MenuButton>
                <MenuList>
                  <MenuItem>退出登录</MenuItem>
                </MenuList>
              </Menu>
            ) : null}
          </Stack>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav navItems={navItems} />
      </Collapse>

      {initialized && user ? (
        <Container maxW='container.xl'>
          <HStack mt={8} alignItems='start' justifyContent='space-between'>
            {children}
            <Box display={{ base: 'none', md: 'flex' }}>
              <UserCard />
            </Box>
          </HStack>
        </Container>
      ) : null}

      <Modal isOpen={initialized && !user} onClose={() => {}} isCentered>
        <ModalOverlay />
        <ModalContent p={8}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
            登录
          </Heading>
          <Text
            fontSize={{ base: 'sm', sm: 'md' }}
            color={useColorModeValue('gray.800', 'gray.400')}
            my={4}
          >
            要继续访问亦可赛艇，您需要先验证您的身份。
          </Text>
          <Stack spacing={6}>
            <Button colorScheme='purple' onClick={logIn} isLoading={loading}>
              使用 jAccount 登录
            </Button>
          </Stack>
        </ModalContent>
      </Modal>
    </Box>
  )
}

const DesktopNav = ({ navItems }: { navItems: Array<NavItem> }) => {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')

  return (
    <Stack direction='row' spacing={4}>
      {navItems.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger='hover' placement='bottom-start'>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize='sm'
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow='xl'
                bg={popoverContentBgColor}
                p={4}
                rounded='xl'
                minW='sm'
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role='group'
      display='block'
      p={2}
      rounded='md'
      _hover={{ bg: useColorModeValue('purple.50', 'gray.900') }}
    >
      <Stack direction='row' align='center'>
        <Box>
          <Text
            transition='all .3s ease'
            _groupHover={{ color: 'purple.400' }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize='sm'>{subLabel}</Text>
        </Box>
        <Flex
          transition='all .3s ease'
          transform='translateX(-10px)'
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify='flex-end'
          align='center'
          flex={1}
        >
          <Icon color='purple.400' w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  )
}

const MobileNav = ({ navItems }: { navItems: Array<NavItem> }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {navItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify='space-between'
        align='center'
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition='all .25s ease-in-out'
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle='solid'
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align='start'
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
}

export default function Root(props: any) {
  return (
    <Provider store={store}>
      <Layout {...props} />
    </Provider>
  )
}
