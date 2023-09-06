import { ReactNode } from 'react'
import { AppShell, Box } from '@mantine/core'
import Nav from './Navbar'
import DashboardHeader from './Header'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <AppShell
      styles={{
        main: {
          padding: 0,
          paddingLeft: 240,
        },
      }}
      navbarOffsetBreakpoint='sm'
      navbar={<Nav />}
    >
      <Box>
        <DashboardHeader />
        {children}
      </Box>
    </AppShell>
  )
}

export default Layout
