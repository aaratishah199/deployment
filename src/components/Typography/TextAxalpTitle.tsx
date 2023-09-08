import { TextProps, Title, TitleOrder } from '@mantine/core'
import { ReactNode } from 'react'

interface Props extends TextProps {
  children: ReactNode
  order: TitleOrder
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

const TextAxalpTitle = ({ children, order, ...props }: Props) => {
  return (
    <Title ff='AxalpGroteskVariable' order={order} {...props}>
      {children}
    </Title>
  )
}

export default TextAxalpTitle
