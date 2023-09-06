import React from 'react'
import { useFormContext } from 'react-hook-form'
import { PasswordInput, TextInput, TextInputProps, rem } from '@mantine/core'
import theme from 'constants/theme'

interface Props extends TextInputProps {
  name: string
  labelColor: string
}

// Rhf : React Hook Form
const RhfTextInput: React.FC<Props> = (props) => {
  const { name, labelColor, type, color, ...restProps } = props

  const {
    register,
    formState: { errors },
  } = useFormContext()

  const Component = type !== 'password' ? TextInput : PasswordInput

  return (
    <Component
      {...register(name)}
      {...restProps}
      error={errors[name]?.message as string}
      styles={{
        label: {
          color: labelColor,
          fontWeight: 'bold',
          textTransform: 'uppercase',
          marginBottom: theme.spacing.xs3,
          fontSize: theme.fontSizes.xs,
        },
        input: {
          color: `${color} !important`,
          padding: rem(14),
          '::placeholder': {
            color: `${color} !important`,
          },
        },
      }}
    />
  )
}

export default RhfTextInput
