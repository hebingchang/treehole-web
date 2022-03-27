import { Icon } from '@chakra-ui/icons'
import {
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { IconType } from 'react-icons'

interface ActionIconProps {
  icon: IconType
  activeIcon: IconType
  color?: string
  activeColor?: string
  value?: number
  isActive?: boolean
  onToggle?: (status: boolean) => void
  disabled?: boolean
  needConfirm?: boolean
  confirmText?: string
}

const ActionIcon = ({
  icon,
  activeIcon,
  isActive,
  value,
  onToggle,
  color,
  activeColor,
  disabled,
  confirmText,
  needConfirm,
}: ActionIconProps) => {
  const [active, setActive] = useState(isActive)
  const confirmDisclosure = useDisclosure()

  return (
    <HStack
      spacing={1}
      cursor='pointer'
      onClick={() => {
        if (disabled) return
        if (needConfirm) confirmDisclosure.onOpen()
        else
          setActive((prevState) => {
            onToggle && onToggle(!prevState)
            return !prevState
          })
      }}
    >
      <Modal
        isOpen={confirmDisclosure.isOpen}
        onClose={confirmDisclosure.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>感谢</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{confirmText ?? '确定？'}</ModalBody>

          <ModalFooter>
            <Button
              colorScheme='purple'
              mr={3}
              onClick={() => {
                setActive((prevState) => {
                  onToggle && onToggle(!prevState)
                  return !prevState
                })
                confirmDisclosure.onClose()
              }}
            >
              确定
            </Button>
            <Button variant='ghost' onClick={confirmDisclosure.onClose}>
              取消
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Icon
        as={active ? activeIcon : icon}
        color={active ? activeColor ?? 'red.500' : color ?? 'gray.500'}
        w='18px'
        h='18px'
      />
      <Text
        color={active ? activeColor ?? 'red.500' : color ?? 'gray.500'}
        fontSize='sm'
      >
        {value}
      </Text>
    </HStack>
  )
}

export default ActionIcon
