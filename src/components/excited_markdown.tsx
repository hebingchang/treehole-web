import { Code, ListItem, OrderedList, Text } from '@chakra-ui/react'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { ReactMarkdownOptions } from 'react-markdown/lib/react-markdown'
import remarkBreaks from 'remark-breaks'

interface PostCardProps extends ReactMarkdownOptions {}

const ExcitedMarkdown = ({ ...props }: PostCardProps) => {
  return (
    <ReactMarkdown
      {...props}
      remarkPlugins={[remarkBreaks]}
      components={{
        code({ node, inline, className, children }) {
          return (
            <Code py={2} px={4} whiteSpace='pre-wrap'>
              {children}
            </Code>
          )
        },
        p({ node, className, children }) {
          return <Text fontSize='sm'>{children}</Text>
        },
        ol({ start, ordered, className, children }) {
          return <OrderedList start={start}>{children}</OrderedList>
        },
        li({ children }) {
          return <ListItem fontSize='sm'>{children}</ListItem>
        },
      }}
    />
  )
}

export default ExcitedMarkdown
