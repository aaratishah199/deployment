import { Box, Navbar } from '@mantine/core'
import { NavbarLinksGroup } from 'components/Navbar/NavbarLinksGroup'
import theme from 'constants/theme'
import { NavbarMockdata } from 'utils/mockData'
import logo from 'assets/images/logo.svg'

function Nav() {
  const links = NavbarMockdata.map((item) => (
    <NavbarLinksGroup data={item} key={item.label} />
  ))
  return (
    <Navbar
      p={theme.spacing.sm}
      hiddenBreakpoint='sm'
      hidden={false}
      width={{ sm: 240, lg: 240 }}
      style={{ border: 'none', backgroundColor: theme.colors.brandBlue[0] }}
    >
      <Box
        style={{
          display: 'flex',
          padding: `0 ${theme.spacing.sm}`,
          alignItems: 'flex-start',
          alignSelf: 'stretch',
          width: '100%',
        }}
      >
        <img
          src={logo}
          alt='Bon International Logo'
          height={'48px'}
          style={{
            objectFit: 'contain',
            display: 'flex',
          }}
        />
      </Box>
      <Navbar.Section pt={theme.spacing.xl}>{links}</Navbar.Section>
    </Navbar>
  )
}

export default Nav
