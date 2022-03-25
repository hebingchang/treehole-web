import { Icon } from '@chakra-ui/icons'
import { Avatar, AvatarProps, Center, Text } from '@chakra-ui/react'
import React from 'react'
import { FaUserCog } from 'react-icons/fa'
import { stringToColour } from '../utils/misc'

interface AvatarExProps extends AvatarProps {
  code: string
  isAlice?: boolean
  isAdmin?: boolean
}

const AvatarEx = ({ code, isAdmin, isAlice, ...props }: AvatarExProps) => {
  if (isAdmin) {
    return (
      <Avatar
        bg='#002F51'
        icon={<Icon as={FaUserCog} color='white' />}
        w={[9, 10]}
        h={[9, 10]}
      />
    )
  }
  let abbr = code.substr(0, 2)
  const caps = code.match(/[A-Z]/g) || []
  if (isAlice) {
    abbr = code[0]
  } else if (caps.length === 2 && code.length !== 7) {
    abbr = caps.join('')
  }
  const { bg, color } = stringToColour(code)
  return (
    <Center w={[9, 10]} h={[9, 10]} bg={bg} borderRadius='50%'>
      <Text fontSize='md' color={color}>
        {abbr}
      </Text>
    </Center>
  )
}

export default AvatarEx
