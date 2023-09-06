import { useState } from 'react'
import {
  Group,
  Box,
  Collapse,
  UnstyledButton,
  createStyles,
} from '@mantine/core'
import theme from 'constants/theme'
import TextAxalp, { TextAxalpLink } from 'components/Typography/TextAxalp'

const useStyles = createStyles(() => ({
  control: {
    display: 'block',
    width: '100%',
    padding: `${theme.spacing.xs2} ${theme.spacing.sm}`,
    fontSize: theme.fontSizes.sm,
    borderRadius: theme.borderRadius.normal,
    color: `${theme.colors.brandBlue[9]}`,
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
  links?: { label: string; link: string }[]
}

export function LinksGroup({ label, initiallyOpened, links }: LinksGroupProps) {
  const { classes } = useStyles()
  const hasLinks = Array.isArray(links)
  const [opened, setOpened] = useState(initiallyOpened || false)
  const items = (hasLinks ? links : []).map((link) => (
    <TextAxalpLink
      color={theme.colors.brandBlue[7]}
      fz={theme.fontSizes.xs}
      fs={'normal'}
      lh={theme.lineHeights.xs}
      fw={455}
      className={classes.link}
      href={link.link}
      key={link.label}
      onClick={(event: React.MouseEvent<HTMLElement>) => event.preventDefault()}
    >
      {link.label}
    </TextAxalpLink>
  ))

  return (
    <>
      <UnstyledButton
        onClick={() => setOpened((o) => !o)}
        className={classes.control}
      >
        <Group position='apart' spacing={0}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box>
              <TextAxalp
                color={theme.colors.brandBlue[9]}
                fz={theme.fontSizes.sm}
                fs={'normal'}
                lh={theme.lineHeights.sm}
              >
                {label}
              </TextAxalp>
            </Box>
          </Box>
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  )
}

export function NavbarLinksGroup({ data }: { data: LinksGroupProps }) {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
      })}
    >
      <LinksGroup
        label={data.label}
        initiallyOpened={data.initiallyOpened}
        links={data.links}
      />
    </Box>
  )
}
