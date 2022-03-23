import { Box, Center, Fade, Heading, Spinner } from '@chakra-ui/react'
import * as React from 'react'
import { useCallback, useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import ThreadBriefCard from '../components/thread_brief_card'
import rpc from '../services/rpc'
import { Thread } from '../services/thread_pb'
import { Sort, ThreadsQueryRequest } from '../services/treehole_pb'

const IndexPage = () => {
  const [threads, setThreads] = useState<Thread[]>([])

  useEffect(() => {
    rpc.client
      .getLatestThreads(new ThreadsQueryRequest().setSort(Sort.SORTDESC), {})
      .then((res) => setThreads(res.getThreadsList()))
  }, [])

  const loadMore = useCallback(() => {
    const last = threads[threads.length - 1].getLastReplyAt()
    if (!last) return
    rpc.client
      .getLatestThreads(
        new ThreadsQueryRequest().setSort(Sort.SORTDESC).setLast(last),
        {}
      )
      .then((res) => {
        setThreads((prevState) => [...prevState, ...res.getThreadsList()])
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
            <ThreadBriefCard thread={thread} key={thread.getModel()?.getId()} />
          ))}
        </InfiniteScroll>
      </Box>
    </Fade>
  )
}

export default IndexPage
