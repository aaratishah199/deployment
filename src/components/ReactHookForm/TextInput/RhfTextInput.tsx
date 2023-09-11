import React from 'react'
import { useFormContext } from 'react-hook-form'
import { PasswordInput, TextInput, TextInputProps } from '@mantine/core'
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
          letterSpacing: '1.5px',
        },
        input: {
          color: `${color} !important`,
          padding: `0.875rem !important`,
          '::placeholder': {
            color: `${theme.colors.slate[4]} !important`,
          },
        },
      }}
    />
  )
}

export default RhfTextInput
