import { Title, Text, TitleOrder, Grid } from '@mantine/core'
import { TextMono } from 'components/Typography'
import theme from 'constants/theme'

type headingType = {
  order: TitleOrder | undefined
  heading: string
}

const Index = () => {
  const displays: string[] = ['d1', 'd2', 'd3']

  const headings: headingType[] = [
    {
      order: 1,
      heading: 'Heading 1',
    },
    {
      order: 2,
      heading: 'Heading 2',
    },
    {
      order: 3,
      heading: 'Heading 3',
    },
    {
      order: 4,
      heading: 'Heading 4',
    },
    {
      order: 5,
      heading: 'Heading 5',
    },
    {
      order: 6,
      heading: 'Heading 6',
    },
  ]

  const bodyText: string[] = ['xs', 'sm', 'md', 'lg']
  const monospacedText: string[] = ['xs', 'sm', 'md', 'lg', 'xl', 'xl2', 'xl3']

  const { Col } = Grid

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { lineHeights }: any = theme
  return (
    <Grid m='xl'>
      <Col span={3}>
        {displays.map((item) => (
          <Text fz={item} lh={lineHeights[item]} key={item}>
            Display
          </Text>
        ))}
      </Col>
      <Col span={3} mt='lg'>
        {headings.map((item) => (
          <Title order={item.order} key={item.order}>
            {item.heading}
          </Title>
        ))}
      </Col>
      <Col span={3} mt='lg'>
        {bodyText.map((item) => (
          <Text fz={item} lh={lineHeights[item]} key={item}>
            Body/Large/Medium 001
          </Text>
        ))}
      </Col>
      <Col span={3} mt='lg'>
        {monospacedText.map((item) => (
          <TextMono fz={item} lh={lineHeights[item]} key={item}>
            Monospaced 001
          </TextMono>
        ))}
      </Col>
    </Grid>
  )
}

export default Index
