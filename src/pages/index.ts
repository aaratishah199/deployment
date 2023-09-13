import { lazy } from 'react'

export const LoginPage = lazy(() => import('./Login'))
export const DashboardPage = lazy(() => import('./Dashboard'))
export const StyleGuidePage = lazy(() => import('./StyleGuide'))
export const BranchesPage = lazy(() => import('./Administration/Branches'))
export const CompanyProfilesPage = lazy(
  () => import('./Administration/CompanyProfile')
)
export const SuppliersPage = lazy(
  () => import('./Administration/CompanySettings/Suppliers')
)
