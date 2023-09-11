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
      bg={theme.colors.brandBlue[0]}
      p={`${theme.spacing.md} ${theme.spacing.xl}`}
      sx={{
        height: 70,
      }}
    >
      <Flex
        direction={'row'}
        align={'center'}
        justify={'space-between'}
        sx={{
          height: '100%',
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

        <Flex direction={'column'} gap={theme.spacing.xs3}>
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
        </Flex>

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
            sx={{
              borderRadius: `${theme.borderRadius.pill}`,
            }}
          />
        </Flex>
      </Flex>
    </Box>
  )
}

export default DashboardHeader
