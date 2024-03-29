import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { RecoilRoot } from 'recoil'

import {
  ErrorBoundary,
  GlobalStyle,
  Layout,
  ModalProvider,
  ProgressBar
} from '@shared/components'
import { Alert, Popup } from '@shared/components/popup'
import { useAlert, usePopup } from '@shared/hooks'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const alert = useAlert()
  const [, { close }] = usePopup()

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 0,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            select: (data: any) => data.data || data,
            onError: (err) => {
              console.error(err)
              alert.error('데이터를 불러오는데 실패하였습니다')
            }
          }
        }
      })
  )

  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>)

  useEffect(() => {
    return () => {
      close()
    }
  }, [Component, close])

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ModalProvider>
          <ErrorBoundary>
            <GlobalStyle>
              <Head>
                <title>TRIP KIT</title>
                <link rel="icon" href="/favicon.ico" />
              </Head>
              <ProgressBar />
              <Alert />
              <Popup />
              {getLayout(<Component {...pageProps} />)}
            </GlobalStyle>
          </ErrorBoundary>
        </ModalProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default function TripKit(props: AppPropsWithLayout) {
  return (
    <RecoilRoot>
      <MyApp {...props} />
    </RecoilRoot>
  )
}

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
