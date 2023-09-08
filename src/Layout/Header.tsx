import { Box, Flex, Image } from '@mantine/core'
import BreadCrumb from 'components/BreadCrumb/BreadCrumb'
import TextAxalpTitle from 'components/Typography/TextAxalpTitle'
import theme from 'constants/theme'
import { Bell } from 'iconoir-react'
import profile from 'assets/images/profilePic.svg'

function DashboardHeader({ title }: { title: string }) {
  const { fontSize, fontWeight, lineHeight } = theme.headings.sizes.h5
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
          <TextAxalpTitle
            c={theme.colors.slate[10]}
            fz={fontSize}
            fs={'normal'}
            fw={fontWeight}
            lh={lineHeight}
            tt={'capitalize'}
            order={5}
          >
            {title}
          </TextAxalpTitle>

          <BreadCrumb />
        </Box>

        <Flex
          direction={'row'}
          gap={theme.spacing.xl}
          justify={'center'}
          align={'center'}
        >
          <Bell width={32} height={32} color={theme.colors.brandBlue[8]} />
          <Image
            width={48}
            height={48}
            src={profile}
            alt='user profile pic'
            fit='contain'
            style={{
              borderRadius: `${theme.borderRadius.pill}`,
            }}
          />
        </Flex>
      </Box>
    </Box>
  )
}

export default DashboardHeader
