import { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import {
  BranchesPage,
  CompantProfilesPage,
  DashboardPage,
  LoginPage,
  StyleGuidePage,
  SuppliersPage,
} from 'pages'

import PrivateRoute from './PrivateRoute'
import PublicRoutes from './PublicRoute'
import { routes } from 'constants/routes'

const BonPanel = () => {
  const isAuth = true
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

        <Route element={<PrivateRoute isAuth={isAuth} />}>
          <Route index element={<DashboardPage />} path={routes.dashboard} />
          <Route
            element={<CompantProfilesPage />}
            path={routes.companyProfile}
          />
          <Route element={<BranchesPage />} path={routes.branches} />
          <Route element={<SuppliersPage />} path={routes.suppliers} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default BonPanel
