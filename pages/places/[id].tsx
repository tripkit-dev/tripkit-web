import { GetServerSideProps } from 'next'
import { Fragment } from 'react'

import { Header, HeartIcon } from '@shared/components'
import { whiteImgStyle } from '@shared/styles'

import { PageTitle, Slider } from '@places/place'

export default function Place() {
  return (
    <Fragment>
      <Header
        center={<PageTitle />}
        right={<HeartIcon containerCss={whiteImgStyle} />}
        float
        whiteBack
      />
      <Slider />
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
