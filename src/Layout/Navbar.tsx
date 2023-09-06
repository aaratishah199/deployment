import { Navbar } from '@mantine/core'
import { NavbarLinksGroup } from 'components/Navbar/NavbarLinksGroup'
import theme from 'constants/theme'
import { NavbarMockdata } from 'utils/mockData'

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
      <Navbar.Section>{links}</Navbar.Section>
    </Navbar>
  )
}

export default Nav
