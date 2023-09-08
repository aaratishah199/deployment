import { Breadcrumbs, Anchor } from '@mantine/core'
import { TextAxalp } from 'components/Typography'
import theme from 'constants/theme'
import { NavArrowRight } from 'iconoir-react'
import { useLocation } from 'react-router'
import { generateBreadcrumbsData, unslugifyString } from 'utils'

interface BreadCrumbsProps {
  title: string
  href: string
}

const breadcrumbAnchors = (data: BreadCrumbsProps[]) => {
  return data.map((item, index) => (
    <Anchor href={item.href} key={index}>
      <TextAxalp
        color={theme.colors.brandBlue[9]}
        fz={theme.fontSizes.sm}
        fs={'normal'}
        fw={theme.fontWeights.medium}
        lh={theme.lineHeights.sm}
        opacity={0.5}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
          alignSelf: 'center',
        }}
      >
        {unslugifyString(item.title)}
      </TextAxalp>
    </Anchor>
  ))
}

function BreadCrumb() {
  const location = useLocation()

  const data = generateBreadcrumbsData(location.pathname)

  return (
    <Breadcrumbs
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: theme.spacing.xs3,
        color: theme.colors.brandBlue[9],
        // opacity: 0.5,
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
      separator={<NavArrowRight width={16} height={16} opacity={0.2} />}
    >
      {breadcrumbAnchors(data)}
    </Breadcrumbs>
  )
}

export default BreadCrumb
