import { Text, TextProps } from '@mantine/core'
import { ReactNode } from 'react'

interface Props extends TextProps {
  children: ReactNode
}

const TextMono = ({ children, ...props }: Props) => {
  return (
    <Text ff='IBMPlexMono' {...props}>
      {children}
    </Text>
  )
}

export default TextMono
