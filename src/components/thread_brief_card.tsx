import { Badge, Box, HStack } from '@chakra-ui/react'
import pangu from 'pangu'
import React from 'react'
import { Thread } from '../services/thread_pb'
import { formatThreadId, getColorFromNumber } from '../utils/misc'

interface ThreadBriefCardProps {
  thread: Thread
}

const ThreadBriefCard = ({ thread }: ThreadBriefCardProps) => {
  return (
    <Box
      maxW='2xl'
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      my={4}
      transition='all .3s'
      _hover={{
        boxShadow: 'lg',
      }}
      cursor='pointer'
    >
      <Box p='5'>
        <HStack display='flex' alignItems='baseline' spacing={1}>
          <Badge>{formatThreadId(thread.getModel()?.getId())}</Badge>
        </HStack>

        <Box mt='2' mb='1' fontWeight='semibold' as='h4' lineHeight='tight'>
          {thread.getTitle()}
        </Box>

        <Box as='span' color='gray.500' fontSize='sm' noOfLines={3}>
          {pangu.spacing(thread.getPreview())}
        </Box>

        <HStack display='flex' alignItems='baseline' spacing={1} mt={2}>
          <Badge px='1.5'>{thread.getCategory()?.getName()}</Badge>
          {thread.getTagsList().map((tag) => (
            <Badge
              px='1.5'
              bgColor={getColorFromNumber(tag.getColor())}
              color='white'
              key={tag.getModel()?.getId()}
            >
              #{tag.getName()}
            </Badge>
          ))}
        </HStack>
      </Box>
    </Box>
  )
}

export default ThreadBriefCard
