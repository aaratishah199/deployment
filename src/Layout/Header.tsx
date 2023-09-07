import { Box } from '@mantine/core'
import BreadCrumb from 'components/BreadCrumb/BreadCrumb'
import { TextAxalp } from 'components/Typography'
import theme from 'constants/theme'
import { Bell } from 'iconoir-react'

function DashboardHeader() {
  return (
    <Box
      style={{
        height: 70,
        background: theme.colors.brandBlue[0],
        padding: `${theme.spacing.md} ${theme.spacing.xl}`,
      }}
    >
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        {/* <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size='sm'
            color={theme.colors.gray[6]}
            mr='xl'
          />
        </MediaQuery> */}

        <Box
          display={'flex'}
          style={{ flexDirection: 'column', gap: theme.spacing.xs3 }}
        >
          <TextAxalp
            c={theme.colors.slate[10]}
            fz={theme.fontSizes.xl2}
            fs={'normal'}
            fw={theme.fontWeights.bold}
            lh={theme.lineHeights.xl2}
            tt={'capitalize'}
          >
            Company Profile
          </TextAxalp>

          <BreadCrumb />
        </Box>

        <Bell width={32} height={32} color={theme.colors.brandBlue[8]} />
      </Box>
    </Box>
  )
}

export default DashboardHeader
