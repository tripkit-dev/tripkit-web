import { GetServerSideProps } from 'next'
import React from 'react'

import { Header, HeartIcon } from '@shared/components'
import { routes } from '@shared/libraries'

interface Props {
  region: string
}

export default function List({ region }: Props) {
  return (
    <>
      <Header center={region} right={<HeartIcon sideLength="18px" />} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const region = query.region

  if (!region) {
    return {
      redirect: {
        destination: routes.plan.guide.path
      },
      props: {}
    }
  }

  return {
    props: { region }
  }
}
