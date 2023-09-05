import { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { DashboardPage, LoginPage, StyleGuidePage } from 'pages'

import PrivateRoute from './PrivateRoute'
import PublicRoutes from './PublicRoute'
import { routes } from 'constants/routes'

const BonPanel = () => {
  const isAuth = false
  return (
    <Suspense fallback='Loading...'>
      <Routes>
        <Route
          path='/'
          element={
            isAuth ? (
              <Navigate to={routes.dashboard} replace />
            ) : (
              <Navigate to={routes.login} replace />
            )
          }
        />
        <Route element={<PublicRoutes isAuth={isAuth} />}>
          <Route path={routes.login} element={<LoginPage />} />
          <Route path={routes.styleGuide} element={<StyleGuidePage />} />
        </Route>

        <Route
          path={routes.dashboard}
          element={<PrivateRoute isAuth={isAuth} />}
        >
          <Route index element={<DashboardPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default BonPanel
