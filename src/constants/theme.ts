import { rem } from '@mantine/core'
import colors from './colors'

const {
  basics,
  slate,
  brandBlue,
  brandPink,
  red,
  orange,
  yellow,
  emerald,
  sky,
  indigo,
  purple,
  fuchsia,
} = colors

const theme = {
  fontSizes: {
    xxl: '1.4rem',
    xl3: '1.6rem',
    xl4: '2rem',
  },
  // components: {
  //   Container: {
  //     defaultProps: {
  //       sizes: {
  //         xs: 540,
  //         sm: 720,
  //         md: 960,
  //         lg: 1140,
  //         xl: 1320,
  //       },
  //     },
  //   },
  // },
  fontFamily: 'AxalpGroteskVariable, sans-serif',
  fontFamilyMonospace: 'IBMPlexMono',
  headings: {
    // properties for all headings
    fontWeight: 500,
    fontFamily: 'AxalpGroteskVariable',
    // properties for individual headings, all of them are optional
    sizes: {
      h2: { fontSize: rem(24), fontWeight: 600, lineHeight: rem(28) },
      h3: { fontSize: rem(20), fontWeight: 600, lineHeight: rem(24) },
      h4: { fontSize: rem(16), lineHeight: rem(20) },
    },
  },
  spacing: {
    xs4: '0.125rem',
    xs3: '0.25rem',
    xs2: '0.375rem',
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
    xl2: '2rem',
    xl3: '2.5rem',
    xl4: '3rem',
  },
  borderRadius: {
    normal: '0.25rem',
    pill: '3.125rem',
  },
  colors: {
    basics,
    slate,
    brandBlue,
    brandPink,
    red,
    orange,
    yellow,
    emerald,
    sky,
    indigo,
    purple,
    fuchsia,
  },
  // primaryColor: 'brand',
  // primaryShade: { light: 4, dark: 5 },
}

export default theme;