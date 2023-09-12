import { useState } from 'react'
import {
  Group,
  Box,
  Collapse,
  UnstyledButton,
  createStyles,
  Flex,
  Text,
} from '@mantine/core'
import theme from 'constants/theme'
import { useLocation } from 'react-router'
import { NavArrowDown, NavArrowUp } from 'iconoir-react'
import { Link } from 'react-router-dom'

const useStyles = createStyles(() => ({
  control: {
    display: 'block',
    width: '100%',
    padding: `${theme.spacing.xl} ${theme.spacing.xs2} ${theme.spacing.xs} ${theme.spacing.sm}`, //1.5
    fontSize: theme.fontSizes.sm,
    borderRadius: theme.borderRadius.normal,
    fontFamily: 'Axalp Grotesk Variable',
    fontStyle: 'normal',
    fontWeight: 455,
    lineHeight: theme.lineHeights.sm,

    '&:hover': {},
  },

  link: {
    fontWeight: 500,
    display: 'block',
    textDecoration: 'none',
    padding: `${theme.spacing.xs2} ${theme.spacing.xs2} ${theme.spacing.xs2} ${theme.spacing.sm}`,
    fontSize: theme.fontSizes.sm,
    borderRadius: theme.borderRadius.normal,
    width: '100%',

    '&:hover': {},
  },

  nestedLink: {
    fontWeight: 500,
    display: 'block',
    textDecoration: 'none',
    padding: `${theme.spacing.xs2} ${theme.spacing.xs2} ${theme.spacing.xs2} ${theme.spacing.sm}`,
    paddingLeft: `${theme.spacing.xl}`,
    fontSize: theme.fontSizes.sm,
    borderRadius: theme.borderRadius.normal,

    '&:hover': {},
  },

  chevron: {
    transition: 'transform 200ms ease',
  },
}))

interface LinksGroupProps {
  label: string
  initiallyOpened?: boolean
  link?: string
  links?: {
    label: string
    initiallyOpened?: boolean
    link?: string
    links?: { label: string; initiallyOpened?: boolean; link: string }[]
  }[]
}

export function LinksGroup({
  label,
  initiallyOpened,
  links,
  link,
}: LinksGroupProps) {
  const { classes } = useStyles()
  const hasLinks = Array.isArray(links)
  const hasNestedLinks =
    Array.isArray(links) && links.map((l) => Array.isArray(l.links))
  const nestedLinks = links?.find((l) => l?.links && l?.links?.find((l1) => l1))

  const location = useLocation()
  const currentLocation = (routeLink?: string) => {
    if (!routeLink) return
    return location.pathname === routeLink
  }

  const [opened, setOpened] = useState(initiallyOpened || false)
  const [nestedOpened, setNestedOpened] = useState(
    nestedLinks?.initiallyOpened || false
  )
  const items = (hasLinks ? links : []).map((link) => (
    <Box
      key={link.label}
      onClick={() => {
        link.links && setNestedOpened(!nestedOpened)
      }}
      display={'flex'}
      bg={currentLocation(link.link) ? theme.colors.brandBlue[7] : 'none'}
      sx={{ borderRadius: theme.borderRadius.normal }}
    >
      {link.link ? (
        <Link to={link.link} style={{ textDecoration: 'none', width: '100%' }}>
          <Text
            color={
              currentLocation(link.link)
                ? theme.colors.basics[0]
                : `${theme.colors.brandBlue[9]}`
            }
            fz={theme.fontSizes.sm}
            fs={'normal'}
            lh={theme.lineHeights.sm}
            fw={theme.fontWeights.medium}
            className={classes.link}
          >
            {link.label}
          </Text>
        </Link>
      ) : (
        <Flex
          direction={'row'}
          justify={'space-between'}
          align={'center'}
          sx={{
            flex: 1,
            cursor: 'pointer',
          }}
        >
          <Text
            color={
              currentLocation(link.link)
                ? theme.colors.basics[0]
                : `${theme.colors.brandBlue[9]}`
            }
            fz={theme.fontSizes.sm}
            fs={'normal'}
            lh={theme.lineHeights.sm}
            fw={theme.fontWeights.medium}
            className={classes.link}
          >
            {link.label}
          </Text>
          {hasNestedLinks &&
            (nestedOpened ? (
              <NavArrowUp color={theme.colors.brandBlue[7]} width={16} />
            ) : (
              <NavArrowDown color={theme.colors.brandBlue[7]} width={16} />
            ))}
        </Flex>
      )}
    </Box>
  ))

  const nestedItems = (
    hasNestedLinks && nestedLinks?.links
      ? nestedLinks.links
      : []
  ).map((link) => (
    <Box component={Link} to={link.link} key={link?.label} td={'none'}>
      <Text
        color={
          currentLocation(link.link)
            ? theme.colors.basics[0]
            : `${theme.colors.brandBlue[7]}`
        }
        fz={theme.fontSizes.xs}
        fs={'normal'}
        lh={theme.lineHeights.xs}
        fw={theme.fontWeights.medium}
        className={classes.nestedLink}
        bg={currentLocation(link.link) ? theme.colors.brandBlue[7] : 'none'}
      >
        {link.label}
      </Text>
    </Box>
  ))

  return (
    <>
      <UnstyledButton
        onClick={() => {
          setOpened((navOpened) => !navOpened)
        }}
        className={classes.control}
        bg={currentLocation(link) ? theme.colors.brandBlue[7] : 'none'}
      >
        <Group position='apart' spacing={0} style={{}}>
          <Flex
            direction={'row'}
            justify={'space-between'}
            align={'center'}
            sx={{
              flex: 1,
            }}
          >
            <Text
              color={
                currentLocation(link)
                  ? theme.colors.basics[0]
                  : `${theme.colors.brandBlue[7]}`
              }
              fz={theme.fontSizes.sm}
              fs={'normal'}
              lh={theme.lineHeights.sm}
              tt={'uppercase'}
              fw={theme.fontWeights.bold}
            >
              {label}
            </Text>

            {hasLinks &&
              (opened ? (
                <NavArrowUp color={theme.colors.brandBlue[7]} width={16} />
              ) : (
                <NavArrowDown color={theme.colors.brandBlue[7]} width={16} />
              ))}
          </Flex>
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
      {hasNestedLinks && opened ? (
        <Collapse in={nestedOpened}>{nestedItems}</Collapse>
      ) : null}
    </>
  )
}

export function NavbarLinksGroup({ data }: { data: LinksGroupProps }) {
  return (
    <Box>
      <LinksGroup {...data} />
    </Box>
  )
}
