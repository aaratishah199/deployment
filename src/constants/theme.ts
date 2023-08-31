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
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',

    // for monospace
    xl: '1.25rem',
    xl2: '1.5rem',
    xl3: '2rem',

    // for display
    d1: '4.5rem',
    d2: '4rem',
    d3: '3.5rem'
  },
  lineHeights: {
    xs: '0.975rem',
    sm: '1.09375rem',
    md: '1.5rem',
    lg: '1.35rem',

    // for monospace
    xl: '1.75rem',
    xl2: '1.875rem',
    xl3: '2.4rem',

    // for display
    d1: '5.4rem',
    d2: '4.88rem',
    d3: '4.27rem',
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
    // properties for individual headings, all of them are optional
    sizes: {
      h1: { fontSize: '2.5rem', fontWeight: 575, lineHeight: '3rem' },
      h2: { fontSize: '2.25rem', fontWeight: 575, lineHeight: '2.745rem' },
      h3: { fontSize: '2rem', fontWeight: 575, lineHeight: '2.4rem' },
      h4: { fontSize: '1.75rem', fontWeight: 575, lineHeight: '2.1rem' },
      h5: { fontSize: '1.5rem', fontWeight: 575, lineHeight: '1.875rem' },
      h6: { fontSize: '1.25rem', fontWeight: 575, lineHeight: '1.5rem' },
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

export default theme
