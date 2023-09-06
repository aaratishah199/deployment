import { Box, Text } from '@mantine/core'
import { Layout } from '../../Layout'
import theme from 'constants/theme'

const Index = () => {
  return (
    <Layout>
      <Box
        m={`0 ${theme.spacing.xl} ${theme.spacing.xl2} ${theme.spacing.xl}`}
        style={{
          boxShadow: '0px 8px 16px 0px rgba(0, 0, 0, 0.06)',
          // height: '100vh',
          // border: '1px solid red',
        }}
      >
        <Text>Body Goes here</Text>
      </Box>
    </Layout>
  )
}

export default Index
