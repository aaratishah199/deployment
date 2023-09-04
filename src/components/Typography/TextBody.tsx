import { Text, TextProps } from '@mantine/core'
import { ReactNode } from 'react'

interface Props extends TextProps {
  bold?: boolean
  children: ReactNode
}

const TextBody = ({ bold, children, ...props }: Props) => {
  return (
    <Text fw={bold ? 700 : 400} {...props}>
      {children}
    </Text>
  )
}

export default TextBody
