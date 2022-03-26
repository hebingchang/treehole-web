import { Box, Center, Fade, Spinner } from '@chakra-ui/react'
import * as React from 'react'
import { useCallback, useEffect, useState } from 'react'
import { useMutex } from 'react-context-mutex'
import { Helmet } from 'react-helmet'
import InfiniteScroll from 'react-infinite-scroll-component'
import PostCard from '../../components/post_card'
import ThreadDetailCard from '../../components/thread_detail_card'
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

  const MutexRunner = useMutex()
  const mutex = new MutexRunner('postsLoader')

  useEffect(() => {
    rpc.client
      .getThread(new PostsQueryRequest().setThreadId(params.id), {})
      .then((res) => {
        setThread(res)
        loadMore()
      })
  }, [params.id])

  const loadMore = useCallback(() => {
    mutex.run(async () => {
      mutex.lock()
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
      rpc.client
        .getThreadPostsEx(request, {})
        .then((res) => {
          setPosts((prevState) => [...prevState, ...res.getPostsList()])
          setHasMore(res.getPostsList().length > 0)
        })
        .finally(() => mutex.unlock())
    })
  }, [posts, params.id, sort, onlyAuthor])

  return (
    <Fade in style={{ flex: 1, maxWidth: '100%' }}>
      <Helmet>
        {thread ? (
          <title>{thread.getTitle()}</title>
        ) : (
          <title>{formatThreadId(params.id)}</title>
        )}
      </Helmet>

      <ThreadDetailCard
        thread={thread?.toObject()}
        onUpdate={(t) => setThread(t)}
      />

      {thread ? (
        <Box mt={8}>
          <Fade in={posts.length > 0}>
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
              {posts.map((post, index) => (
                <PostCard
                  thread={thread!}
                  post={post}
                  key={post.getModel()?.getId()}
                  onUpdate={(p) =>
                    setPosts((prevState) => {
                      const newState = prevState
                      newState[index] = p
                      return newState
                    })
                  }
                />
              ))}
            </InfiniteScroll>
          </Fade>
        </Box>
      ) : null}
    </Fade>
  )
}

export default ThreadPage
