import { Box, Center, Fade, Heading, Spinner } from '@chakra-ui/react'
import { navigate } from 'gatsby'
import * as React from 'react'
import { useCallback, useEffect, useState } from 'react'
import { useMutex } from 'react-context-mutex'
import { Helmet } from 'react-helmet'
import InfiniteScroll from 'react-infinite-scroll-component'
import ThreadBriefCard from '../../components/thread_brief_card'
import rpc from '../../services/rpc'
import { Thread } from '../../services/thread_pb'
import { Sort, ThreadsQueryRequest } from '../../services/treehole_pb'
import { useAppSelector } from '../../states/hooks'
import { selectCategories } from '../../states/site'

const CategoryPage = ({
  params,
  location,
}: {
  params: { id: string }
  location: any
}) => {
  const [threads, setThreads] = useState<Thread.AsObject[]>(
    window.history.state?.threads ?? []
  )
  const [hasMore, setHasMore] = useState(true)
  const categories = useAppSelector(selectCategories)
  const MutexRunner = useMutex()
  const mutex = new MutexRunner('threadsLoader')

  const category = categories.find((c) => c.model?.id === parseInt(params.id))

  useEffect(() => {
    if (threads.length === 0) {
      loadMore()
    }
  }, [])

  useEffect(() => {
    setThreads([])
    setHasMore(true)
    loadMore()
  }, [params.id])

  const loadMore = useCallback(() => {
    if (!category) return
    mutex.run(async () => {
      mutex.lock()
      const last =
        threads.length === 0 ? '' : threads[threads.length - 1].lastReplyAt
      rpc.client
        .getLatestThreads(
          new ThreadsQueryRequest()
            .setSort(Sort.SORTDESC)
            .setLast(last)
            .setCategoryId(parseInt(params.id)),
          {}
        )
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
  }, [threads, setThreads, params.id])

  if (!category) {
    navigate('/')
    return null
  }

  return (
    <Fade in style={{ flex: 1, maxWidth: '100%' }}>
      <Helmet>
        <title>{category!.name}</title>
      </Helmet>
      <Heading px={2}>{category!.name}</Heading>

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

export default CategoryPage
