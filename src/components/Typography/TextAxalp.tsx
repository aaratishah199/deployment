import { Text, TextProps } from '@mantine/core'
import { ReactNode } from 'react'

interface Props extends TextProps {
  children: ReactNode
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

const TextAxalp = ({ children, ...props }: Props) => {
  return (
    <Text ff='AxalpGroteskVariable' {...props}>
      {children}
    </Text>
  )
}

export default TextAxalp
