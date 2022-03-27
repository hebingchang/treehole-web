import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  HStack,
  SkeletonCircle,
  SkeletonText,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'
import pangu from 'pangu'
import React, { useEffect, useState } from 'react'
import {
  AiFillDislike,
  AiFillLike,
  AiFillStar,
  AiOutlineDislike,
  AiOutlineLike,
  AiOutlineStar,
} from 'react-icons/ai'
import { IoBeer, IoBeerOutline } from 'react-icons/io5'
import { IdentityType } from '../services/identity_pb'
import { RateType } from '../services/rate_pb'
import rpc from '../services/rpc'
import { Thread } from '../services/thread_pb'
import {
  AppreciateRequest,
  FavRequest,
  RateRequest,
} from '../services/treehole_pb'
import { formatThreadId, getThreadTime } from '../utils/misc'
import ActionIcon from './action_icon'
import AvatarEx from './avatar_ex'
import ExcitedMarkdown from './excited_markdown'

interface ThreadDetailCardProps {
  thread?: Thread.AsObject
  onUpdate?: (thread: Thread) => void
}

const ThreadDetailCard = ({ thread, onUpdate }: ThreadDetailCardProps) => {
  const [_thread, setThread] = useState(thread)
  const [updating, setUpdating] = useState(false)

  useEffect(() => {
    setThread(thread)
  }, [thread])

  return (
    <Box maxW='2xl' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      {_thread ? (
        <Box py={[4, 5]} px={[4, 5]}>
          <Breadcrumb fontWeight='medium' fontSize='sm' mb={2} color='gray.500'>
            <BreadcrumbItem>
              <BreadcrumbLink
                as={GatsbyLink}
                to={`/category/${_thread.category?.model?.id}`}
              >
                {_thread.category?.name}
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href='#'>
                {formatThreadId(_thread.model?.id)}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          {_thread.title !== '' ? (
            <Heading size='lg' mb={4} mt={1}>
              {pangu.spacing(_thread.title)}
            </Heading>
          ) : (
            <Box h={2} />
          )}

          <HStack display='flex' spacing={2}>
            <AvatarEx
              code={_thread.identityCode}
              isAlice={_thread.isAlice && _thread.isAlice.value}
              isAdmin={
                _thread.identity?.type === IdentityType.IDENTITYTYPEADMIN
              }
            />
            <VStack spacing={0} alignItems='start'>
              <Text fontWeight='600' fontSize={['sm', 'md']}>
                {_thread.identityCode}
              </Text>
              <Text color='gray.500' fontSize={['xs', 'sm']}>
                {getThreadTime(_thread.model?.createdAt)}
              </Text>
            </VStack>
          </HStack>

          <Box mt={4}>
            <ExcitedMarkdown children={_thread.content} />
          </Box>

          <HStack display='flex' justifyContent='space-between' mt={4}>
            <ActionIcon
              icon={IoBeerOutline}
              activeIcon={IoBeer}
              value={_thread.appreciationCount}
              isActive={_thread.isAppreciated}
              disabled={updating || _thread.isAppreciated}
              needConfirm
              confirmText='确定花费 1 个小鱼干感谢楼主？'
              onToggle={(v) => {
                setThread((prevState) =>
                  prevState
                    ? {
                        ...prevState,
                        appreciationCount: prevState.appreciationCount + 1,
                        isAppreciated: v,
                      }
                    : undefined
                )
                rpc.client
                  .appreciateThread(
                    new AppreciateRequest()
                      .setId(_thread.model!.id)
                      .setAmount(1),
                    {}
                  )
                  .then((res) => {
                    onUpdate && onUpdate(res)
                  })
              }}
            />

            <HStack display='flex' alignItems='center' spacing={4}>
              {updating ? <Spinner color='gray.500' w={3.5} h={3.5} /> : null}
              <ActionIcon
                icon={AiOutlineLike}
                activeIcon={AiFillLike}
                value={_thread.likeCount - _thread.hateCount}
                isActive={_thread.isLike}
                disabled={updating || _thread.isHate}
                onToggle={(v) => {
                  setUpdating(true)
                  setThread((prevState) =>
                    prevState
                      ? {
                          ...prevState,
                          likeCount: prevState.likeCount + (v ? 1 : -1),
                          isLike: v,
                        }
                      : undefined
                  )
                  rpc.client
                    .rateThread(
                      new RateRequest()
                        .setId(_thread.model!.id)
                        .setType(
                          v ? RateType.RATETYPELIKE : RateType.RATETYPENORMAL
                        ),
                      {}
                    )
                    .then((res) => {
                      onUpdate && onUpdate(res)
                      setUpdating(false)
                    })
                }}
              />
              <ActionIcon
                icon={AiOutlineDislike}
                activeIcon={AiFillDislike}
                isActive={_thread.isHate}
                disabled={updating || _thread.isLike}
                activeColor='gray.500'
                onToggle={(v) => {
                  setUpdating(true)
                  setThread((prevState) =>
                    prevState
                      ? {
                          ...prevState,
                          hateCount: prevState.hateCount + (v ? 1 : -1),
                          isHate: v,
                        }
                      : undefined
                  )
                  rpc.client
                    .rateThread(
                      new RateRequest()
                        .setId(_thread.model!.id)
                        .setType(
                          v ? RateType.RATETYPEHATE : RateType.RATETYPENORMAL
                        ),
                      {}
                    )
                    .then((res) => {
                      onUpdate && onUpdate(res)
                      setUpdating(false)
                    })
                }}
              />
              <ActionIcon
                icon={AiOutlineStar}
                activeIcon={AiFillStar}
                isActive={_thread.isFav}
                disabled={updating}
                activeColor='yellow.500'
                onToggle={(v) => {
                  setUpdating(true)
                  setThread((prevState) =>
                    prevState ? { ...prevState, isFav: v } : undefined
                  )
                  rpc.client
                    .favThread(new FavRequest().setId(_thread.model!.id), {})
                    .then((res) => {
                      onUpdate && onUpdate(res)
                      setUpdating(false)
                    })
                }}
              />
            </HStack>
          </HStack>
        </Box>
      ) : (
        <Box p='5'>
          <SkeletonCircle size='10' />
          <SkeletonText mt='4' noOfLines={4} spacing='4' />
        </Box>
      )}
    </Box>
  )
}

export default ThreadDetailCard
