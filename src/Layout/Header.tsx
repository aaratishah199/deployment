import { Text, Box } from '@mantine/core'
import theme from 'constants/theme'

function DashboardHeader() {
  return (
    <Box
      style={{
        height: 70,
        background: theme.colors.brandBlue[0],
        padding: `${theme.spacing.md} ${theme.spacing.xl}`,
      }}
    >
      <Box style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        {/* <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size='sm'
            color={theme.colors.gray[6]}
            mr='xl'
          />
        </MediaQuery> */}

        <Text>Dashboard Header</Text>
      </Box>
    </Box>
  )
}

export default DashboardHeader
