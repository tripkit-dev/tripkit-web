import React from 'react'

import type { GetServerSideProps, NextPage } from 'next'

import { travelDestinationModels } from 'models/travelDestination'
import { TravelDestination } from 'types/TravelDestination'

import { MyPageCards, MyPageLayout } from '@components/MyPage'

interface Props {
  travelDestinations: TravelDestination[]
}

const Like: NextPage<Props> = ({ travelDestinations }) => {
  return (
    <MyPageLayout
      outer={
        <MyPageCards>
          {travelDestinations.map((destination) => (
            <MyPageCards.Card
              key={destination.id}
              imgSrc={destination.src}
              bottom={<MyPageCards.Heart sideLength="24px" />}
            />
          ))}
        </MyPageCards>
      }
    ></MyPageLayout>
  )
}

export default Like

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      travelDestinations: travelDestinationModels || []
    }
  }
}
