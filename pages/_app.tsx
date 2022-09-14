import React, { useState } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { RecoilRoot } from 'recoil'

import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'

import { color } from '@constants/color'

import { ErrorBoundary } from '@components/common'
import GlobalStyle from '@components/GlobalStyle'
import { Layout } from '@components/layout'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 0,
            refetchOnWindowFocus: false,
            refetchOnMount: false
          }
        }
      })
  )

  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>)

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ErrorBoundary>
          <GlobalStyle>
            <RecoilRoot>
              <NextNProgress
                color={color.mainPlaceholder}
                height={2}
                stopDelayMs={100}
                options={{ showSpinner: false }}
              />
              {getLayout(<Component {...pageProps} />)}
            </RecoilRoot>
          </GlobalStyle>
        </ErrorBoundary>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
