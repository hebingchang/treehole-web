import { Box, Image, VStack } from '@chakra-ui/react'
import React from 'react'
// @ts-ignore
import avatar from '../images/avatar.png'
import { selectUser } from '../states/credential'
import { useAppSelector } from '../states/hooks'

const UserCard = () => {
  const user = useAppSelector(selectUser)

  return (
    <Box w='xs' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <VStack p='5'>
        <Image src={avatar} height={12} width={12} />
        <Box
          mt='2'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
          textAlign='center'
        >
          {user?.account}
        </Box>
        <Box as='span' color='gray.500' fontSize='sm'>
          UID: {user?.model?.id}
        </Box>
      </VStack>
    </Box>
  )
}

export default UserCard
