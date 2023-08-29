import { Global } from '@mantine/core'

import monoLight from 'assets/fonts/IBMPlexMono-Light.woff2'
import monoRegular from 'assets/fonts/IBMPlexMono-Regular.woff2'
import monoSemiBold from 'assets/fonts/IBMPlexMono-SemiBold.woff2'
import monoBold from 'assets/fonts/IBMPlexMono-Bold.woff2'
import regular from 'assets/fonts/AxalpGroteskVariable.woff2'

const CustomFonts = () => (
  <Global
    styles={[
      {
        '@font-face': {
          fontFamily: 'IBMPlexMono',
          src: `url('${monoLight}') format('woff2')`,
          fontWeight: 200,
          fontStyle: 'normal',
        },
      },
      {
        '@font-face': {
          fontFamily: 'IBMPlexMono',
          src: `url('${monoRegular}') format('woff2')`,
          fontWeight: 400,
          fontStyle: 'normal',
        },
      },
      {
        '@font-face': {
          fontFamily: 'IBMPlexMono',
          src: `url('${monoSemiBold}') format('woff2')`,
          fontWeight: 600,
          fontStyle: 'normal',
        },
      },
      {
        '@font-face': {
          fontFamily: 'IBMPlexMono',
          src: `url('${monoBold}') format('woff2')`,
          fontWeight: 700,
          fontStyle: 'normal',
        },
      },
      {
        '@font-face': {
          fontFamily: 'AxalpGroteskVariable',
          src: `url('${regular}') format('woff2')`,
          fontWeight: 400,
          fontStyle: 'normal',
        },
      },
    ]}
  />
)

export default CustomFonts
