/* eslint-disable @typescript-eslint/no-explicit-any */
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MantineProvider } from '@mantine/core'
import * as Sentry from '@sentry/react'
import theme from 'constants/theme'
import CustomFonts from 'components/Font/CustomFonts'
import BonPanel from 'routes'
import Toast from 'components/Toast'
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary'

Sentry.init({
  dsn: '',
  integrations: [
    new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ['localhost', 'https:yourserver.io/api/'],
    }),
    new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
})

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 2,
      },
    },
  })

  return (
    <ErrorBoundary>
      <MantineProvider theme={theme as any} withGlobalStyles withNormalizeCSS>
        <Toast />
        <CustomFonts />
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <BonPanel />
          </BrowserRouter>
        </QueryClientProvider>
      </MantineProvider>
    </ErrorBoundary>
  )
}

export default App
