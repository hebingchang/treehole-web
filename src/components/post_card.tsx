import { Icon } from '@chakra-ui/icons'
import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import pangu from 'pangu'
import React from 'react'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { IoBeerOutline } from 'react-icons/io5'
import { IdentityType } from '../services/identity_pb'
import { Post } from '../services/post_pb'
import { Thread } from '../services/thread_pb'
import { getPostTime } from '../utils/misc'
import AvatarEx from './avatar_ex'

interface PostCardProps {
  thread: Thread
  post: Post
}

const PostCard = ({ post, thread }: PostCardProps) => {
  return (
    <Box
      maxW='2xl'
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      my={4}
    >
      <Box p='5'>
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
              <Text fontWeight='600'>{post.getIdentityCode()}</Text>
              <Text color='gray.500' fontSize='sm'>
                {getPostTime(post.getModel()?.getCreatedAt())}
              </Text>
            </VStack>
          </HStack>
          <Text color='gray.500' fontSize='sm'>
            {post.getFloor()}楼
          </Text>
        </HStack>

        <Box as='span' noOfLines={3} mt={4}>
          {pangu.spacing(post.getContent())}
        </Box>

        <HStack display='flex' justifyContent='space-between' mt={4}>
          <HStack spacing={1}>
            <Icon as={IoBeerOutline} color='gray.500' />
            <Text color='gray.500' fontSize='sm'>
              {post.getAppreciationCount()}
            </Text>
          </HStack>

          <HStack display='flex' alignItems='baseline' spacing={3}>
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
