import * as s from './HotPlace.styled'

import { useQuery } from 'react-query'

import { Size } from '@enums/Size'

import { HotPlace as HotPlaceType } from 'types/HotPlace'

import { hotPlaceApi } from 'apis/hotPlace'

import { Card, Text } from '@components/common'

import SectionTitle from '../SectionTitle'

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
              <Text size={Size.LARGE} css={s.cardTitleStyle}>
                {hotPlace.name}
              </Text>
            }
            bottom={[
              <Text key="subName" size={Size.SMALL}>
                {hotPlace.subName}
              </Text>,
              <Text
                key="description"
                size={Size.X_SMALL}
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
