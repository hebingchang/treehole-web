import { WarningTwoIcon } from '@chakra-ui/icons'
import { Box, Heading, Text } from '@chakra-ui/react'
import * as React from 'react'

const NotFoundPage = () => {
  return (
    <Box textAlign='center' py={10} px={6}>
      <WarningTwoIcon boxSize='50px' color='orange.300' />
      <Heading as='h2' size='xl' mt={6} mb={2}>
        404
      </Heading>
      <Text color='gray.500'>没有找到您访问的网页</Text>
    </Box>
  )
}

export default NotFoundPage
