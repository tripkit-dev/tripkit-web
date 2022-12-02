import React, { useState } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { RecoilRoot } from 'recoil'

import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'

import { ErrorBoundary } from '@shared/components'
import { GlobalStyle, Layout } from '@shared/components'
import { color } from /constants/color'

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
            refetchOnMount: false,
            select: (data: any) => data.data || data
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
              <Head>
                <title>Tripkit</title>
              </Head>
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
