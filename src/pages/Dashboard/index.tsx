import { Text } from '@mantine/core'
import { Layout } from '../../Layout'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <Layout headerTitle='Dashboard'>
      <Text>Body Goes here</Text>
      <Link to='/branches'>branch</Link>
    </Layout>
  )
}

export default Index
