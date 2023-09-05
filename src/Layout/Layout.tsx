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

      //   header={
      // <Header height={{ base: 50, md: 70 }} p="md">
      //   <Box style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
      //     <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
      //       <Burger
      //         opened={opened}
      //         onClick={() => setOpened((o) => !o)}
      //         size="sm"
      //         color={theme.colors.gray[6]}
      //         mr="xl"
      //       />
      //     </MediaQuery>

      //     <Text>Header</Text>
      //   </Box>
      // </Header>
      //   }
    >
      <Box>
        <DashboardHeader />
        {children}
      </Box>
    </AppShell>
  )
}

export default Layout
