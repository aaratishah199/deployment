import { Suspense } from 'react'
import { Route, Routes } from 'react-router'
import { DashboardPage, LoginPage, StyleGuidePage } from 'pages'

import PrivateRoute from './PrivateRoute'
import PublicRoutes from './PublicRoute'
import { routes } from 'constants/routes'

const BonPanel = () => {
  const isAuth = true
  return (
    <Suspense fallback='Loading...'>
      <Routes>
        <Route element={<PublicRoutes isAuth={isAuth} />}>
          <Route path={routes.login} element={<LoginPage />} />
          <Route path={routes.styleGuide} element={<StyleGuidePage />} />
        </Route>

        <Route path='/dashboard' element={<PrivateRoute isAuth={isAuth} />}>
          <Route index element={<DashboardPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default BonPanel
