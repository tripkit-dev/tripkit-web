import type { GetServerSideProps, NextPage } from 'next'

import { Size as TextSize } from '@enums/Text'

import { travelDestinationModels } from 'models/travelDestination'
import { TravelDestination } from 'types/TravelDestination'

import { Text } from '@components/common'
import { MyPageCards, MyPageLayout } from '@components/MyPage'

interface Props {
  travelDestinations: TravelDestination[]
}

const Own: NextPage<Props> = ({ travelDestinations }) => {
  return (
    <MyPageLayout>
      <MyPageCards>
        {travelDestinations.map((destination) => (
          <MyPageCards.Card
            key={destination.id}
            imgSrc={destination.src}
            bottom={
              <Text size={TextSize.SMALL} lineClamp={1}>
                {destination.title}
              </Text>
            }
          />
        ))}
      </MyPageCards>
    </MyPageLayout>
  )
}

export default Own

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      travelDestinations: travelDestinationModels || []
    }
  }
}
