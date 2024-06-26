import { Box, Button, Flex, Image, Title, Center } from '@mantine/core'
import { FormProvider, useForm } from 'react-hook-form'
import { ArrowRight } from 'iconoir-react'
import { useMediaQuery } from '@mantine/hooks'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import API from 'services'
import LoginValidationSchema from 'utils/validations/login'
import { routes } from 'constants/constants'
import theme from 'constants/theme'
import { useStore } from 'store/globalStore'
import RhfTextInput from 'components/ReactHookForm/TextInput/RhfTextInput'
import { TextBody } from 'components/Typography'
import { toast } from 'utils/mantineNotifications'
import { AxiosErrorResponse, errorMessage } from 'utils/errorMessage'

import logo from 'assets/images/logo.png'
import airplaneImg from 'assets/images/airplane.png'

interface LoginFieldTypes {
  email: string
  password: string
}

const Index = () => {
  // Media Queries Breakpoint
  const isMediumScreen = useMediaQuery(`(max-width: ${theme.breakpoints.md})`)
  const isSmallScreen = useMediaQuery(`(max-width: ${theme?.breakpoints.sm})`)

  const setAuth = useStore((state) => state.setAuth)

  const methods = useForm<LoginFieldTypes>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(LoginValidationSchema),
  })
  const { handleSubmit } = methods

  const { mutate, isLoading } = useMutation(API.login.login, {
    onSuccess: (data) => {
      const { token } = data.data
      token &&
        setAuth({
          isAuth: true,
          token,
        })
    },
    onError: (data: AxiosErrorResponse) => {
      toast({
        title: 'login failed',
        message: errorMessage(data),
        type: 'error',
      })
    },
  })

  const onSubmit = async (data: LoginFieldTypes) => {
    mutate({ user: data })
  }

  return (
    <Flex mih='100vh'>
      <Center
        display={isMediumScreen ? 'none' : 'flex'}
        w='40vw'
        bg={`linear-gradient(90deg, ${theme.gradients.blue[0]}, ${theme.gradients.blue[1]})`}
      >
        <Box h='10.9rem' w='25.64rem'>
          <Image src={airplaneImg} />
        </Box>
      </Center>

      <Flex
        justify='center'
        align={isMediumScreen ? 'center' : 'flex-start'}
        direction='column'
        px={isSmallScreen ? 'xl' : 'xl6'}
        w={isMediumScreen ? '100vw' : '60vw'}
        gap={theme.spacing.xl2}
      >
        <Box maw='33.5rem' w='100%'>
          <Image height='3.25rem' width='7.125rem' src={logo} />
        </Box>

        <Flex maw='33.5rem' gap={theme.spacing.xl2} direction='column' w='100%'>
          <Box>
            <Title color={theme?.colors.slate[7]} fz='1.75rem' lh='2.1rem'>
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
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Flex direction='column' gap={theme.spacing.xl2}>
                <RhfTextInput
                  labelColor={theme.colors.brandBlue[6]}
                  name='email'
                  placeholder='Enter your email'
                  label='email'
                  type='email'
                  color={theme.colors.slate[7]}
                  size='md'
                />
                <RhfTextInput
                  labelColor={theme.colors.brandBlue[6]}
                  name='password'
                  placeholder='Enter your password'
                  label='password'
                  type='password'
                  color={theme.colors.slate[7]}
                  size='md'
                />

                <Box
                  component='a'
                  href={routes.forgotPassword}
                  sx={{
                    color: theme.colors.brandBlue[7],
                    textDecoration: 'none',
                  }}
                  fz='sm'
                  fw='bold'
                >
                  Forgot Password?
                </Box>

                <Button
                  type='submit'
                  size='sm'
                  variant='gradient'
                  loading={isLoading}
                  gradient={{
                    from: theme?.gradients?.pink[0],
                    to: theme?.gradients?.pink[1],
                    deg: 90,
                  }}
                  rightIcon={
                    !isLoading && <ArrowRight height={16} width={16} />
                  }
                >
                  {!isLoading && 'Login'}
                </Button>
              </Flex>
            </form>
          </FormProvider>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Index
