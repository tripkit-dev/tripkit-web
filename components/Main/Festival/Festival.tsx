import * as s from './Festival.styled'
import { whiteImgStyle } from 'styles/common.styled'

import { Size as CardSize, Direction } from '@enums/Card'
import { Size as TextSize } from '@enums/Text'

import { hotPlaceModels } from 'models/hotPlace'

import { Card, Img, Text } from '@components/common'

import SectionTitle from '../SectionTitle'

export default function Festival() {
  return (
    <section>
      <SectionTitle
        title="이번달 축제는 어디?"
        subTitle="여행에 축제가 빠질 수 없지"
        hasMore
      />

      <s.Cards>
        {hotPlaceModels.map((place, idx) => {
          const isReady = idx > 2

          return (
            <s.CardWrapper key={place.id}>
              <s.Status key="status" isReady={isReady}>
                준비중
              </s.Status>
              <Card
                size={CardSize.LARGE}
                imgSrc={place.img}
                direction={Direction.COLUMN}
                top={[
                  <Text key="name" size={TextSize.SMALL}>
                    {place.name}
                  </Text>,
                  <Text
                    key="festivName"
                    size={TextSize.XX_LARGE}
                    margin="8px 0 4px 0"
                  >
                    {place.name}
                  </Text>,
                  <Text key="date" fontWeight="400">
                    {place.date}
                  </Text>
                ]}
                bottom={
                  <s.Location isReady={isReady}>
                    <Img
                      src="/images/sample/map_marker.png"
                      sideLength="15px"
                      containerCss={whiteImgStyle}
                    />
                    <Text
                      size={TextSize.SMALL}
                      margin="0"
                      padding="0"
                      fontWeight="300"
                    >
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
