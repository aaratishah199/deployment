import { Navigate, Outlet } from 'react-router'
import { routes } from 'constants/constants'

type Props = {
  isAuth: boolean
}

const PrivateRoute = ({ isAuth }: Props) => {
  return isAuth ? (
    <div>
      <Outlet />
    </div>
  ) : (
    <Navigate to={routes.login} replace />
  )
}

export default PrivateRoute
