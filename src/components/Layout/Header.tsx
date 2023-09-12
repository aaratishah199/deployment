import { Box, Flex, Image, Title } from '@mantine/core'
import BreadCrumb from 'components/BreadCrumb/BreadCrumb'
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
        <Flex direction={'column'} gap={theme.spacing.xs3}>
          <Title
            c={theme.colors.slate[10]}
            fz={fontSize}
            fs={'normal'}
            fw={fontWeight}
            lh={lineHeight}
            tt={'capitalize'}
            order={5}
          >
            {title}
          </Title>

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
