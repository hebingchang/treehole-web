import { Icon } from '@chakra-ui/icons'
import {
  Badge,
  Box,
  Heading,
  HStack,
  SkeletonCircle,
  SkeletonText,
  Text,
  VStack,
} from '@chakra-ui/react'
import pangu from 'pangu'
import React from 'react'
import { AiOutlineEye, AiOutlineLike, AiOutlineMessage } from 'react-icons/ai'
import { IdentityType } from '../services/identity_pb'
import { Thread } from '../services/thread_pb'
import { getColorFromNumber, getThreadTime } from '../utils/misc'
import AvatarEx from './avatar_ex'
import ExcitedMarkdown from './excited_markdown'

interface ThreadDetailCardProps {
  thread?: Thread.AsObject
}

const ThreadDetailCard = ({ thread }: ThreadDetailCardProps) => {
  return (
    <Box
      maxW='2xl'
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      mb={4}
      transition='all .3s'
      _hover={{
        boxShadow: 'lg',
      }}
    >
      {thread ? (
        <Box p='5'>
          {thread.title !== '' ? (
            <Heading size='lg' mb={4}>
              {thread.title}
            </Heading>
          ) : null}

          <HStack display='flex' spacing={2}>
            <AvatarEx
              code={thread.identityCode}
              isAlice={thread.isAlice && thread.isAlice.value}
              isAdmin={thread.identity?.type === IdentityType.IDENTITYTYPEADMIN}
            />
            <VStack spacing={0} alignItems='start'>
              <Text fontWeight='600' fontSize={['sm', 'md']}>
                {thread.identityCode}
              </Text>
              <Text color='gray.500' fontSize={['xs', 'sm']}>
                {getThreadTime(thread.model?.createdAt)}
              </Text>
            </VStack>
          </HStack>

          <Box mt={4}>
            <ExcitedMarkdown children={pangu.spacing(thread.content)} />
          </Box>

          <HStack display='flex' justifyContent='space-between' mt={4}>
            <HStack display='flex' alignItems='baseline' spacing={1}>
              <Badge px='1.5'>{thread.category?.name}</Badge>
              {thread.tagsList.map((tag) => (
                <Badge
                  px='1.5'
                  bgColor={getColorFromNumber(tag.color)}
                  color='white'
                  key={tag.model?.id}
                >
                  #{tag.name}
                </Badge>
              ))}
            </HStack>

            <HStack display='flex' alignItems='baseline' spacing={3}>
              <HStack spacing={1}>
                <Icon as={AiOutlineEye} color='gray.500' />
                <Text color='gray.500' fontSize='xs'>
                  {thread.viewCount}
                </Text>
              </HStack>
              <HStack spacing={1}>
                <Icon as={AiOutlineLike} color='gray.500' />
                <Text color='gray.500' fontSize='xs'>
                  {thread.likeCount}
                </Text>
              </HStack>
              <HStack spacing={1}>
                <Icon as={AiOutlineMessage} color='gray.500' />
                <Text color='gray.500' fontSize='xs'>
                  {thread.replyCount}
                </Text>
              </HStack>
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
