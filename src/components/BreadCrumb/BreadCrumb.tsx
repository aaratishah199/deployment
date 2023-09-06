import { Breadcrumbs, Anchor } from '@mantine/core'
import { TextAxalp } from 'components/Typography'
import theme from 'constants/theme'
import { NavArrowRight } from 'iconoir-react'

const items = [
  { title: 'Dashboard', href: '/dashboard' },
  { title: 'Dashboard', href: '/dashboard' },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    <TextAxalp
      color={theme.colors.brandBlue[9]}
      fz={theme.fontSizes.sm}
      fs={'normal'}
      fw={455}
      lh={theme.lineHeights.sm}
      opacity={0.5}
    >
      {item.title}
    </TextAxalp>
  </Anchor>
))

function BreadCrumb() {
  return (
    <Breadcrumbs
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: theme.spacing.xs3,
        color: theme.colors.brandBlue[9],
        opacity: 0.5,
      }}
      separator={<NavArrowRight />}
    >
      {items}
    </Breadcrumbs>
  )
}

export default BreadCrumb
