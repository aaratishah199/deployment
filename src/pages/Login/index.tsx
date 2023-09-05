import {
  Box,
  Button,
  Flex,
  Image,
  PasswordInput,
  TextInput,
  Title,
} from '@mantine/core'
import theme from 'constants/theme'
import airplaneImg from 'assets/images/airplane.png'
import logo from 'assets/images/logo.png'
import { TextBody } from 'components/Typography'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ArrowRight } from 'iconoir-react'
import * as Yup from 'yup'

const LoginValidationSchema = Yup.object().shape({
  email: Yup.string().email().required('Email is required').nullable(),
  password: Yup.string().min(8).max(32).required('Password is required'),
})

const Index = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginValidationSchema),
  })

  const onSubmit = () => {
    console.log('Form Submitted')
  }

  return (
    <Flex mih='100vh'>
      <Flex
        align='center'
        justify='center'
        w='40vw'
        style={{
          background: `linear-gradient(90deg, ${theme.gradients.blue[0]}, ${theme.gradients.blue[1]})`,
        }}
      >
        <Box h='10.9rem' w='25.64rem'>
          <Image src={airplaneImg} />
        </Box>
      </Flex>
      <Flex
        justify='center'
        direction='column'
        pl='5.62rem'
        pr='11.5rem'
        w='60vw'
        gap={theme.spacing.xl2}
      >
        <Box h='3.25rem' w='7.125rem'>
          <Image src={logo} />
        </Box>

        <Flex gap={theme.spacing.xl2} direction='column' w='100%'>
          <Box>
            <Title color={theme?.colors.slate[7]} fz={theme.headings.sizes.h2}>
              Login
            </Title>
            <TextBody
              color={theme.colors.slate[5]}
              fz={theme.fontSizes.sm}
              mt={theme.spacing.xs}
            >
              Enter your email and password to login.
            </TextBody>
          </Box>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex direction='column' gap={theme.spacing.xl2}>
              <Box>
                <TextInput
                  {...register('email')}
                  placeholder='Enter your email'
                  label='EMAIL'
                  color={theme.colors.brandBlue[6]}
                  error={errors?.email?.message}
                  size='lg'
                  styles={{
                    label: {
                      color: theme.colors.brandBlue[6],
                      fontWeight: 'bold',
                    },
                    input: {
                      color: theme.colors.slate[7],
                    },
                  }}
                />
              </Box>
              <Box>
                <PasswordInput
                  {...register('password')}
                  placeholder='Enter your password'
                  label='PASSWORD'
                  color={theme.colors.brandBlue[6]}
                  error={errors?.password?.message}
                  size='lg'
                  styles={{
                    label: {
                      color: theme.colors.brandBlue[6],
                      fontWeight: 'bold',
                    },
                    input: {
                      color: theme.colors.slate[7],
                    },
                  }}
                />
              </Box>
              <Box
                component='a'
                href='#'
                color={theme?.colors?.brandBlue[6]}
                fz='sm'
                fw='bold'
              >
                Forgot Password?
              </Box>

              <Button
                type='submit'
                size='lg'
                variant='gradient'
                gradient={{
                  from: theme?.gradients?.pink[0],
                  to: theme?.gradients?.pink[1],
                  deg: 90,
                }}
                rightIcon={<ArrowRight height={16} width={16} />}
              >
                Login
              </Button>
            </Flex>
          </form>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Index
