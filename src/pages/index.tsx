import { Box, Center, Fade, Heading, Spinner } from '@chakra-ui/react'
import * as React from 'react'
import { useCallback, useEffect, useState } from 'react'
import { useMutex } from 'react-context-mutex'
import InfiniteScroll from 'react-infinite-scroll-component'
import ThreadBriefCard from '../components/thread_brief_card'
import rpc from '../services/rpc'
import { Thread } from '../services/thread_pb'
import { Sort, ThreadsQueryRequest } from '../services/treehole_pb'

const IndexPage = ({ location }: any) => {
  const [threads, setThreads] = useState<Thread.AsObject[]>(
    window.history.state?.threads ?? []
  )
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
      const last =
        threads.length === 0 ? '' : threads[threads.length - 1].lastReplyAt
      rpc.client
        .getLatestThreads(
          new ThreadsQueryRequest().setSort(Sort.SORTDESC).setLast(last),
          {}
        )
        .then((res) => {
          setThreads((prevState) => {
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
    <Fade in style={{ flex: 1 }}>
      <title>时间线</title>
      <Heading>时间线</Heading>

      <Box mt={8}>
        <InfiniteScroll
          next={loadMore}
          hasMore
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

export default IndexPage
