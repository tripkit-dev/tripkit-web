import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { Fragment, ReactElement } from 'react'

import { Header, HeartIcon, Navigation } from '@shared/components'
import { color } from '@shared/constants'
import { whiteImgStyle } from '@shared/styles'

import {
  BusinessTime,
  Call,
  Location,
  PageTitle,
  Slider,
  Tabs
} from '@place/components'

export default function Place() {
  const { query } = useRouter()

  const tab = query.tab || 'menu'

  return (
    <Fragment>
      <Header
        center={<PageTitle />}
        right={<HeartIcon containerCss={whiteImgStyle} />}
        float
        whiteBack
      />
      <Slider />
      <Tabs />

      {(() => {
        switch (tab) {
          case 'menu':
            return null
          case 'info':
            return (
              <Fragment>
                <Location />
                <BusinessTime />
                <Call />
              </Fragment>
            )
        }
      })()}
    </Fragment>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
  resolvedUrl
}) => {
  const tab = query.tab

  if (!tab) {
    return {
      redirect: {
        permanent: false,
        destination: `${resolvedUrl}?tab=menu`
      }
    }
  }

  return {
    props: {
      place: null
    }
  }
}

Place.getLayout = (page: ReactElement) => (
  <Fragment>
    <article
      style={{
        backgroundColor: color.gray08,
        minHeight: '100vh',
        paddingBottom: 90
      }}
    >
      {page}
    </article>
    <Navigation />
  </Fragment>
)
