import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { Fragment, ReactElement } from 'react'

import { Header, HeartIcon, Navigation } from '@shared/components'
import { color } from '@shared/constants'
import { whiteImgStyle } from '@shared/styles'

import { Location, PageTitle, Slider, Tabs } from '@place/components'

export default function Place() {
  const { query } = useRouter()

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
        switch (query.tab) {
          case 'menu':
            return null
          case 'info':
            return (
              <Fragment>
                <Location />
              </Fragment>
            )
        }
      })()}
    </Fragment>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const id = query.id

  console.log(id)

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
        paddingBottom: 76
      }}
    >
      {page}
    </article>
    <Navigation />
  </Fragment>
)
