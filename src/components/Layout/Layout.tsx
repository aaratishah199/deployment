import { ReactNode } from 'react'
import { AppShell, Box } from '@mantine/core'
import Nav from './Navbar'
import DashboardHeader from './Header'
import theme from 'constants/theme'

interface LayoutProps {
  children: ReactNode
  headerTitle: string
}

const Layout = ({ children, headerTitle }: LayoutProps) => {
  return (
    <AppShell
      styles={{
        main: {
          padding: 0,
          paddingLeft: 240,
          background: theme.colors.brandBlue[0],
        },
      }}
      navbarOffsetBreakpoint='sm'
      navbar={<Nav />}
    >
      <Box>
        <DashboardHeader title={headerTitle} />
        <Box
          m={`0 ${theme.spacing.xl} ${theme.spacing.xl2} ${theme.spacing.xl}`}
          bg={theme.colors.basics[0]}
          sx={{
            boxShadow: '0px 8px 16px 0px rgba(0, 0, 0, 0.06)',
            borderRadius: theme.borderRadius.normal,
          }}
        >
          {children}
        </Box>
      </Box>
    </AppShell>
  )
}

export default Layout
