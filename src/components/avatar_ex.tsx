import { Icon } from '@chakra-ui/icons'
import { Avatar, AvatarProps } from '@chakra-ui/react'
import React from 'react'
import { FaUserCog } from 'react-icons/fa'

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
        w={10}
        h={10}
      />
    )
  }
  let name = code
  const caps = code.match(/[A-Z]/g) || []
  if (!isAlice && caps.length === 2 && code.length !== 7) {
    name = code.split(caps[1])[0] + ' ' + caps[1] + code.split(caps[1])[1]
  }
  return <Avatar name={name} w={10} h={10} />
}

export default AvatarEx
