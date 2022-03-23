import { Box, Center, Fade, Spinner } from '@chakra-ui/react'
import * as React from 'react'
import { useCallback, useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import PostCard from '../../components/post_card'
import { Post } from '../../services/post_pb'
import rpc from '../../services/rpc'
import { Thread } from '../../services/thread_pb'
import {
  LoadDirection,
  PostsQueryRequest,
  PostsQueryRequestEx,
  Sort,
} from '../../services/treehole_pb'
import { formatThreadId } from '../../utils/misc'

const ThreadPage = ({ params }: { params: { id: number } }) => {
  const [thread, setThread] = useState<Thread>()
  const [posts, setPosts] = useState<Post[]>([])
  const [sort, setSort] = useState(Sort.SORTASC)
  const [onlyAuthor, setOnlyAuthor] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    rpc.client
      .getThread(new PostsQueryRequest().setThreadId(params.id), {})
      .then((res) => {
        setThread(res)
        loadMore()
      })
  }, [params.id])

  const loadMore = useCallback(() => {
    const top = 0
    const last = posts.length === 0 ? 0 : posts[posts.length - 1].getFloor()
    const request = new PostsQueryRequestEx()
      .setThreadId(params.id)
      .setTop(top)
      .setLast(last)
      .setSize(15)
      .setSort(sort)
      .setOnlyAuthor(onlyAuthor)
      .setDirection(LoadDirection.LOADDIRECTIONDOWN)
    rpc.client.getThreadPostsEx(request, {}).then((res) => {
      setHasMore(res.getPostsList().length > 0)
      setPosts((prevState) => [...prevState, ...res.getPostsList()])
    })
  }, [posts, params.id, sort, onlyAuthor])

  return (
    <Fade in style={{ flex: 1 }}>
      <title>{formatThreadId(thread?.getModel()?.getId())}</title>

      <Box mt={8}>
        {posts.length > 0 ? (
          <InfiniteScroll
            next={loadMore}
            hasMore={hasMore}
            loader={
              <Center maxW='2xl' h='12' mb={4}>
                <Spinner />
              </Center>
            }
            dataLength={posts.length}
          >
            {posts.map((post) => (
              <PostCard
                thread={thread!}
                post={post}
                key={post.getModel()?.getId()}
              />
            ))}
          </InfiniteScroll>
        ) : null}
      </Box>
    </Fade>
  )
}

export default ThreadPage
