import { Icon } from '@chakra-ui/icons'
import { Badge, Box, HStack, Text } from '@chakra-ui/react'
import { navigate } from 'gatsby'
import pangu from 'pangu'
import React from 'react'
import { AiOutlineEye, AiOutlineLike, AiOutlineMessage } from 'react-icons/ai'
import { BsFillPinAngleFill } from 'react-icons/bs'
import { Thread } from '../services/thread_pb'
import {
  formatThreadId,
  getColorFromNumber,
  getLastReplyAt,
} from '../utils/misc'

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
      onClick={() => {
        navigate(`/thread/${thread.getModel()?.getId()}`)
      }}
    >
      <Box p='5'>
        <HStack display='flex' justifyContent='space-between' spacing={1}>
          <Badge>{formatThreadId(thread.getModel()?.getId())}</Badge>
          <Box as='span' color='gray.500' fontSize='sm'>
            {getLastReplyAt(thread.getLastReplyAt())}
          </Box>
        </HStack>

        <HStack mt='2' mb='1' justifyContent='space-between'>
          <Box fontWeight='semibold' as='h4' lineHeight='tight'>
            {thread.getTitle()}
          </Box>
          {thread.getIsTop() ? <Icon as={BsFillPinAngleFill} /> : null}
        </HStack>

        <Box as='span' color='gray.500' fontSize='sm' noOfLines={3}>
          {pangu.spacing(thread.getPreview())}
        </Box>

        <HStack display='flex' justifyContent='space-between' mt={2}>
          <HStack display='flex' alignItems='baseline' spacing={1}>
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

          <HStack display='flex' alignItems='baseline' spacing={3}>
            <HStack spacing={1}>
              <Icon as={AiOutlineEye} color='gray.500' />
              <Text color='gray.500' fontSize='xs'>
                {thread.getViewCount()}
              </Text>
            </HStack>
            <HStack spacing={1}>
              <Icon as={AiOutlineLike} color='gray.500' />
              <Text color='gray.500' fontSize='xs'>
                {thread.getLikeCount()}
              </Text>
            </HStack>
            <HStack spacing={1}>
              <Icon as={AiOutlineMessage} color='gray.500' />
              <Text color='gray.500' fontSize='xs'>
                {thread.getReplyCount()}
              </Text>
            </HStack>
          </HStack>
        </HStack>
      </Box>
    </Box>
  )
}

export default ThreadBriefCard
