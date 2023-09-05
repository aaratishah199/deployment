import { Box, Text } from '@mantine/core'
import { Layout } from '../../Layout'
import theme from 'constants/theme'

const Index = () => {
  return (
    <Layout>
      <Box
        pt={0}
        pr={theme.spacing.xl}
        pb={theme.spacing.xl2}
        pl={theme.spacing.xl}
      >
        <Text>Body Goes here</Text>
      </Box>
    </Layout>
  )
}

export default Index
