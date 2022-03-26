import { Box, HStack, Spinner, Text, VStack } from '@chakra-ui/react'
import pangu from 'pangu'
import React, { useEffect, useState } from 'react'
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from 'react-icons/ai'
import { IoBeer, IoBeerOutline } from 'react-icons/io5'
import { IdentityType } from '../services/identity_pb'
import { Post, PostStatus } from '../services/post_pb'
import { RateType } from '../services/rate_pb'
import rpc from '../services/rpc'
import { Thread } from '../services/thread_pb'
import { AppreciateRequest, RateRequest } from '../services/treehole_pb'
import { getThreadTime } from '../utils/misc'
import ActionIcon from './action_icon'
import AvatarEx from './avatar_ex'
import ExcitedMarkdown from './excited_markdown'

interface PostCardProps {
  thread: Thread
  post: Post
  onUpdate?: (thread: Post) => void
}

const PostCard = ({ post, thread, onUpdate }: PostCardProps) => {
  const [_post, setPost] = useState(post.toObject())
  const [_thread, setThread] = useState(thread.toObject())
  const [updating, setUpdating] = useState(false)

  useEffect(() => {
    setPost(post.toObject())
  }, [post])

  useEffect(() => {
    setThread(thread.toObject())
  }, [thread])

  if (_post.status === PostStatus.POSTSTATUSKILLED) {
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
              {_post.floor}楼
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
          <HStack display='flex' spacing={2}>
            <AvatarEx
              code={_post.identityCode}
              isAlice={_thread.isAlice && _thread.isAlice?.value}
              isAdmin={_post.identity?.type === IdentityType.IDENTITYTYPEADMIN}
            />
            <VStack spacing={0} alignItems='start'>
              <Text fontWeight='600' fontSize={['sm', 'md']}>
                {_post.identityCode}
              </Text>
              <Text color='gray.500' fontSize={['xs', 'sm']}>
                {getThreadTime(_post.model?.createdAt)}
              </Text>
            </VStack>
          </HStack>
          <Text color='gray.500' fontSize={['xs', 'sm']}>
            {_post.floor}楼
          </Text>
        </HStack>

        {_post.replyToPost ? (
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
              回复 {_post.replyToPost.floor}楼 {_post.replyToPost.identityCode}:
            </Text>
            <Text noOfLines={3} whiteSpace='pre-line'>
              {pangu.spacing(_post.replyToPost.preview)}
            </Text>
          </Box>
        ) : null}

        <Box mt={4}>
          <ExcitedMarkdown children={pangu.spacing(_post.content)} />
        </Box>

        <HStack display='flex' justifyContent='space-between' mt={4}>
          <ActionIcon
            icon={IoBeerOutline}
            activeIcon={IoBeer}
            value={_post.appreciationCount}
            isActive={_post.isAppreciated}
            disabled={updating || _post.isAppreciated}
            needConfirm
            confirmText='确定花费 1 个小鱼干感谢层主？'
            onToggle={(v) => {
              setPost((prevState) => ({
                ...prevState,
                appreciationCount: prevState.appreciationCount + 1,
                isAppreciated: v,
              }))
              rpc.client
                .appreciatePost(
                  new AppreciateRequest().setId(_post.model!.id).setAmount(1),
                  {}
                )
                .then((res) => {
                  onUpdate && onUpdate(res)
                })
            }}
          />

          <HStack display='flex' alignItems='center' spacing={3}>
            {updating ? <Spinner color='gray.500' w={3.5} h={3.5} /> : null}
            <ActionIcon
              icon={AiOutlineLike}
              activeIcon={AiFillLike}
              value={_post.likeCount - _post.hateCount}
              isActive={_post.isLike}
              disabled={updating || _post.isHate}
              onToggle={(v) => {
                setUpdating(true)
                setPost((prevState) => ({
                  ...prevState,
                  likeCount: prevState.likeCount + (v ? 1 : -1),
                  isLike: v,
                }))
                rpc.client
                  .ratePost(
                    new RateRequest()
                      .setId(_post.model!.id)
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
              isActive={_post.isHate}
              disabled={updating || _post.isLike}
              activeColor='gray.500'
              onToggle={(v) => {
                setUpdating(true)
                setPost((prevState) => ({
                  ...prevState,
                  hateCount: prevState.hateCount + (v ? 1 : -1),
                  isHate: v,
                }))
                rpc.client
                  .ratePost(
                    new RateRequest()
                      .setId(_post.model!.id)
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
          </HStack>
        </HStack>
      </Box>
    </Box>
  )
}

export default PostCard
