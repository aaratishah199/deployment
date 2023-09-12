import { Flex, Navbar, ScrollArea } from '@mantine/core'
import { NavbarLinksGroup } from 'components/Navbar/NavbarLinksGroup'
import theme from 'constants/theme'
import logo from 'assets/images/logo.svg'
import { NavbarMockdata } from 'utils'
import { LogoImage } from './Layout.style'

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
      bg={theme.colors.brandBlue[0]}
      withBorder={false}
    >
      <Flex
        p={`0 ${theme.spacing.sm}`}
        align={'flex-start'}
        justify={'flex-start'}
      >
        <LogoImage
          src={logo}
          alt='Bon International Logo'
          height={'48px'}
        />
      </Flex>
      <Navbar.Section pt={theme.spacing.xl} grow component={ScrollArea}>
        {links}
      </Navbar.Section>
    </Navbar>
  )
}

export default Nav
