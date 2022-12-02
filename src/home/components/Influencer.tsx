import * as s from './Influencer.styled'
import { whiteImgStyle } from '@shared/styles/common.styled'

import React from 'react'

import { Button, Card, HeartIcon, Img, Text } from '@shared/components'
import { color } from '@shared/constants/color'
import { Size as CardSize } from '@shared/enums/Card'
import { Shape } from '@shared/enums/Shape'
import { Size } from '@shared/enums/Size'
import { Size as TextSize } from '@shared/enums/Text'
import { HotPlace } from '@shared/types/HotPlace'

interface Props {
  hotPlaces?: HotPlace[]
}

export default function Influencer({ hotPlaces }: Props) {
  return (
    <>
      <s.Influencer>
        <Img
          src="/images/img_profile_example.png"
          sideLength="68px"
          containerCss={s.imgStyle}
          hasNewIcon
          isIconLeft
        />
        <Text size={TextSize.MEDIUM}>
          블로거 <s.Strong>영광굴비</s.Strong>님
        </Text>
        <Text size={TextSize.SMALL}>한적하게 걷기 좋은 곳을 자주 다녀요.</Text>
      </s.Influencer>
      <s.Cards>
        {hotPlaces?.map((hotPlace) => (
          <Card
            key={hotPlace.id}
            size={CardSize.SMALL}
            imgSrc={hotPlace.img}
            top={hotPlace.category.map((category) => (
              <Button
                key={category}
                size={Size.X_SMALL}
                borderColor={color.white}
                margin="0 4px 0 0"
              >
                {category}
              </Button>
            ))}
            bottom={[
              <Text key="subName" size={TextSize.SMALL}>
                {hotPlace.subName}
              </Text>,
              <Text
                key="description"
                size={TextSize.X_SMALL}
                css={s.descriptionStyle}
                lineClamp={2}
              >
                {hotPlace.description}
              </Text>,
              <s.Heart key="heart">
                <HeartIcon />
              </s.Heart>
            ]}
          />
        ))}
      </s.Cards>
      <s.Influencer>
        <Img
          src="/images/img_profile_example.png"
          sideLength="68px"
          containerCss={s.imgStyle}
          hasNewIcon
          isIconLeft
        />
        <Text size={TextSize.MEDIUM}>
          블로거 <s.Strong>고기집 사탕도둑 엄준식</s.Strong>님
        </Text>
        <Text size={TextSize.SMALL}>풍경이 좋은 곳을 자주 찾곤해요.</Text>
      </s.Influencer>
      <s.Cards>
        {hotPlaces?.map((hotPlace) => (
          <Card
            key={hotPlace.id}
            size={CardSize.SMALL}
            imgSrc={hotPlace.img}
            top={hotPlace.category.map((category) => (
              <Button
                key={category}
                size={Size.X_SMALL}
                borderColor={color.white}
                margin="0 4px 0 0"
              >
                {category}
              </Button>
            ))}
            bottom={[
              <Text key="subName" size={TextSize.SMALL}>
                {hotPlace.subName}
              </Text>,
              <Text
                key="description"
                size={TextSize.X_SMALL}
                css={s.descriptionStyle}
                lineClamp={2}
              >
                {hotPlace.description}
              </Text>,
              <s.Heart key="heart">
                <Img
                  src="/images/sample/heart.svg"
                  shape={Shape.NORMAL}
                  sideLength="24px"
                  containerCss={whiteImgStyle}
                />
              </s.Heart>
            ]}
          />
        ))}
      </s.Cards>
    </>
  )
}
