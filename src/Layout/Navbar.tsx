import { Navbar, Text } from '@mantine/core'
import theme from 'constants/theme'

const mockdata = [
  { label: 'Dashboard' },
  {
    label: 'Market news',
    initiallyOpened: true,
    links: [
      { label: 'Overview', link: '/' },
      { label: 'Forecasts', link: '/' },
      { label: 'Outlook', link: '/' },
      { label: 'Real time', link: '/' },
    ],
  },
  {
    label: 'Releases',
    links: [
      { label: 'Upcoming releases', link: '/' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' },
    ],
  },
  { label: 'Analytics' },
  { label: 'Contracts' },
  { label: 'Settings' },
  {
    label: 'Security',
    links: [
      { label: 'Enable 2FA', link: '/' },
      { label: 'Change password', link: '/' },
      { label: 'Recovery codes', link: '/' },
    ],
  },
]

function Nav() {
  const links = mockdata.map((item) => (
    <Text key={item.label}>{item.label}</Text>
  ))
  return (
    <Navbar
      p={theme.spacing.sm}
      hiddenBreakpoint='sm'
      hidden={false}
      width={{ sm: 240, lg: 240 }}
      style={{ border: 'none', backgroundColor: theme.colors.brandBlue[0] }}
    >
      {links}
    </Navbar>
  )
}

export default Nav
