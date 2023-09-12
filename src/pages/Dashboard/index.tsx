import { Text } from '@mantine/core'
import { Layout } from '../../components/Layout'
import { Link } from 'react-router-dom'
import { routes } from 'constants/routes'

const Index = () => {
  return (
    <Layout headerTitle='Dashboard'>
      <Text>Body Goes here</Text>
      <Link to={routes.branches}>branch</Link>
    </Layout>
  )
}

export default Index
