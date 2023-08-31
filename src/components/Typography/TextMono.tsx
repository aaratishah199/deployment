import { Text, TextProps } from '@mantine/core'
import { ReactNode } from 'react'

interface Props extends TextProps {
  children: ReactNode
}

const TextMono = ({ fz, lh, children }: Props) => {
  return (
    <Text ff='IBMPlexMono' fz={fz} lh={lh}>
      {children}
    </Text>
  )
}

export default TextMono
