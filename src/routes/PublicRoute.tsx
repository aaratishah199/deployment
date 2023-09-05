import { routes } from 'constants/constants'
import { Navigate, Outlet } from 'react-router-dom'

type Props = {
  isAuth: boolean
}

const PublicRoutes = ({ isAuth }: Props) => {
  return !isAuth ? <Outlet /> : <Navigate to={routes.dashboard} replace />
}

export default PublicRoutes
