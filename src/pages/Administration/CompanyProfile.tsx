import { Text } from '@mantine/core'
import { Layout } from 'components/Layout'
import { routes } from 'constants/routes'
import { Link } from 'react-router-dom'

const CompanyProfile = () => {
  return (
    <Layout headerTitle='Company Profile'>
      <Text>Body Goes here</Text>
      <Link to={routes.branches}>branch</Link>
    </Layout>
  )
}

export default CompanyProfile
