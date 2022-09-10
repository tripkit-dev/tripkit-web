import { useState } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'

import type { AppProps } from 'next/app'

import { ErrorBoundary } from '@components/common'
import GlobalStyle from '@components/GlobalStyle'

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false
          }
        }
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ErrorBoundary>
          <GlobalStyle>
            <Component {...pageProps} />
          </GlobalStyle>
        </ErrorBoundary>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
