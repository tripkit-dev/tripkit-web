import * as s from './HotPlace.styled'

import { useQuery } from 'react-query'

import { hotPlaceApi } from '@shared/apis'
import { Card, Text } from '@shared/components'
import { HotPlace as HotPlaceType } from '@shared/types'

import SectionTitle from './SectionTitle'

export default function HotPlace() {
  const { data: hotPlaces } = useQuery<HotPlaceType[]>(
    ['hotPlace/get'],
    () => hotPlaceApi.get() as Promise<HotPlaceType[]>
  )

  return (
    <section>
      <SectionTitle title="요즘 핫한 여행지" hasMore />
      <s.Cards>
        {hotPlaces?.map((hotPlace) => (
          <Card
            key={hotPlace.id}
            imgSrc={hotPlace.img}
            top={
              <Text size="large" css={s.cardTitleStyle}>
                {hotPlace.name}
              </Text>
            }
            bottom={[
              <Text key="subName" size="small">
                {hotPlace.subName}
              </Text>,
              <Text
                key="description"
                size="xsmall"
                css={s.descriptionStyle}
                lineClamp={2}
              >
                {hotPlace.description}
              </Text>
            ]}
          />
        ))}
      </s.Cards>
    </section>
  )
}
