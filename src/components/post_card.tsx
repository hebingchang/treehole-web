import { Icon } from '@chakra-ui/icons'
import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import pangu from 'pangu'
import React from 'react'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { IoBeerOutline } from 'react-icons/io5'
import { IdentityType } from '../services/identity_pb'
import { Post, PostStatus } from '../services/post_pb'
import { Thread } from '../services/thread_pb'
import { getPostTime } from '../utils/misc'
import AvatarEx from './avatar_ex'
import ExcitedMarkdown from './excited_markdown'

interface PostCardProps {
  thread: Thread
  post: Post
}

const PostCard = ({ post, thread }: PostCardProps) => {
  if (post.getStatus() === PostStatus.POSTSTATUSKILLED) {
    return (
      <Box
        maxW='2xl'
        borderWidth='1px'
        borderRadius='lg'
        overflow='hidden'
        my={4}
      >
        <Box py={[3, 5]} px={[4, 5]}>
          <HStack justifyContent='space-between' alignItems='start'>
            <Text color='gray.500' fontSize='sm'>
              此楼已被删除。
            </Text>
            <Text color='gray.500' fontSize='sm'>
              {post.getFloor()}楼
            </Text>
          </HStack>
        </Box>
      </Box>
    )
  }
  return (
    <Box
      maxW='2xl'
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      my={4}
    >
      <Box py={[3, 5]} px={[4, 5]}>
        <HStack justifyContent='space-between' alignItems='start'>
          <HStack display='flex' spacing={3}>
            <AvatarEx
              code={post.getIdentityCode()}
              isAlice={thread.getIsAlice() && thread.getIsAlice()?.getValue()}
              isAdmin={
                post.getIdentity()?.getType() === IdentityType.IDENTITYTYPEADMIN
              }
            />
            <VStack spacing={0} alignItems='start'>
              <Text fontWeight='600' fontSize={['sm', 'md']}>
                {post.getIdentityCode()}
              </Text>
              <Text color='gray.500' fontSize={['xs', 'sm']}>
                {getPostTime(post.getModel()?.getCreatedAt())}
              </Text>
            </VStack>
          </HStack>
          <Text color='gray.500' fontSize='sm'>
            {post.getFloor()}楼
          </Text>
        </HStack>

        {post.hasReplyToPost() ? (
          <Box
            mt={4}
            bg='gray.50'
            color='gray.500'
            borderRadius={4}
            py={2}
            px={3}
            fontSize='xs'
            _dark={{ bg: 'gray.700', color: 'gray.400' }}
          >
            <Text fontWeight='600' mb={1}>
              回复 {post.getReplyToPost()?.getFloor()}楼{' '}
              {post.getReplyToPost()?.getIdentityCode()}:
            </Text>
            <Text noOfLines={3} whiteSpace='pre-line'>
              {pangu.spacing(post.getReplyToPost()!.getPreview())}
            </Text>
          </Box>
        ) : null}

        <Box mt={4}>
          <ExcitedMarkdown children={pangu.spacing(post.getContent())} />
        </Box>

        <HStack display='flex' justifyContent='space-between' mt={4}>
          <HStack spacing={1}>
            <Icon as={IoBeerOutline} color='gray.500' />
            <Text color='gray.500' fontSize='sm'>
              {post.getAppreciationCount()}
            </Text>
          </HStack>

          <HStack display='flex' alignItems='baseline' spacing={4}>
            <HStack spacing={1}>
              <Icon as={AiOutlineLike} color='gray.500' />
              <Text color='gray.500' fontSize='sm'>
                {post.getLikeCount() - post.getHateCount()}
              </Text>
            </HStack>
            <Icon as={AiOutlineDislike} color='gray.500' />
          </HStack>
        </HStack>
      </Box>
    </Box>
  )
}

export default PostCard
