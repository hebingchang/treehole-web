import { Box, Fade, Heading, Spinner } from '@chakra-ui/react'
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
        console.log(res.getThreadsList().length)
        setThreads((prevState) => [...prevState, ...res.getThreadsList()])
      })
  }, [threads, setThreads])

  return (
    <Fade in>
      <Heading>时间线</Heading>

      <Box mt={8}>
        <InfiniteScroll
          next={loadMore}
          hasMore
          loader={
            <Box maxW='2xl' alignItems='center'>
              <Spinner />
            </Box>
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
