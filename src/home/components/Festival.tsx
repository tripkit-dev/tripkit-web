import * as s from './Festival.styled'

import { useRef } from 'react'
import { useQuery } from 'react-query'

import { hotPlaceApi } from '@shared/apis'
import { Card, Img, Text } from '@shared/components'
import { useIntersectionObserver } from '@shared/hooks'
import { whiteImgStyle } from '@shared/styles'
import { HotPlace } from '@shared/types'

import SectionTitle from './SectionTitle'

export default function Festival() {
  const sectionRef = useRef<HTMLElement>(null)
  const { entry } = useIntersectionObserver(sectionRef)

  const { data: hotPlaces } = useQuery<HotPlace[]>(
    'hotPlace/get',
    () => hotPlaceApi.get() as Promise<HotPlace[]>,
    { enabled: entry?.isIntersecting }
  )

  return (
    <section ref={sectionRef}>
      <SectionTitle
        title="이번달 축제는 어디?"
        subTitle="여행에 축제가 빠질 수 없지"
        hasMore
      />

      <s.Cards>
        {hotPlaces?.map((place, idx) => {
          const isReady = idx > 2

          return (
            <s.CardWrapper key={place.id}>
              <s.Status key="status" isReady={isReady}>
                준비중
              </s.Status>
              <Card
                size="large"
                imgSrc={place.img}
                direction="column"
                top={[
                  <Text key="name" size="small">
                    {place.name}
                  </Text>,
                  <Text key="festivName" size="2xlarge" margin="8px 0 4px 0">
                    {place.name}
                  </Text>,
                  <Text key="date" fontWeight="400">
                    {place.date}
                  </Text>
                ]}
                bottom={
                  <s.Location isReady={isReady}>
                    <Img
                      src="/images/official/marker-fill.png"
                      sideLength="15px"
                      containerCss={whiteImgStyle}
                    />
                    <Text size="small" margin="0" padding="0" fontWeight="300">
                      {place.info}
                    </Text>
                  </s.Location>
                }
                bottomStyle={s.bottomStyle}
              />
            </s.CardWrapper>
          )
        })}
      </s.Cards>
    </section>
  )
}
