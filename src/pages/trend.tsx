import { Box, Center, Fade, Heading, Spinner } from '@chakra-ui/react'
import * as React from 'react'
import { useCallback, useEffect, useState } from 'react'
import { useMutex } from 'react-context-mutex'
import { Helmet } from 'react-helmet'
import InfiniteScroll from 'react-infinite-scroll-component'
import ThreadBriefCard from '../components/thread_brief_card'
import rpc from '../services/rpc'
import { Thread } from '../services/thread_pb'
import { ThreadsQueryRequest } from '../services/treehole_pb'

const TrendPage = ({ location }: any) => {
  const [threads, setThreads] = useState<Thread.AsObject[]>(
    window.history.state?.threads ?? []
  )
  const [hasMore, setHasMore] = useState(true)
  const MutexRunner = useMutex()
  const mutex = new MutexRunner('threadsLoader')

  useEffect(() => {
    if (threads.length === 0) {
      loadMore()
    }
  }, [])

  const loadMore = useCallback(() => {
    mutex.run(async () => {
      mutex.lock()
      const last = threads.length.toString()
      rpc.client
        .getHottestThreads(new ThreadsQueryRequest().setLast(last), {})
        .then((res) => {
          setThreads((prevState) => {
            if (res.getThreadsList().length === 0) setHasMore(false)
            const newState = [...prevState, ...res.toObject().threadsList]
            window.history.replaceState(
              { key: location.key, threads: newState },
              ''
            )
            return newState
          })
        })
        .finally(() => mutex.unlock())
    })
  }, [threads, setThreads])

  return (
    <Fade in style={{ flex: 1, maxWidth: '100%' }}>
      <Helmet>
        <title>热门</title>
      </Helmet>
      <Heading px={2}>热门</Heading>

      <Box mt={8}>
        <InfiniteScroll
          next={loadMore}
          hasMore={hasMore}
          loader={
            <Center maxW='2xl' h='12' mb={4}>
              <Spinner />
            </Center>
          }
          dataLength={threads.length}
          style={{ overflow: 'visible' }}
        >
          {threads.map((thread) => (
            <ThreadBriefCard thread={thread} key={thread.model?.id} />
          ))}
        </InfiniteScroll>
      </Box>
    </Fade>
  )
}

export default TrendPage
