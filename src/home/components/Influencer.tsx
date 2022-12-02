import * as s from './Influencer.styled'

import React from 'react'

import { Button, Card, HeartIcon, Img, Text } from '@shared/components'
import { color } from '@shared/constants'
import { whiteImgStyle } from '@shared/styles'
import { HotPlace } from '@shared/types'

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
        <Text size="medium">
          블로거 <s.Strong>영광굴비</s.Strong>님
        </Text>
        <Text size="small">한적하게 걷기 좋은 곳을 자주 다녀요.</Text>
      </s.Influencer>
      <s.Cards>
        {hotPlaces?.map((hotPlace) => (
          <Card
            key={hotPlace.id}
            size="small"
            imgSrc={hotPlace.img}
            top={hotPlace.category.map((category) => (
              <Button
                key={category}
                size="xsmall"
                borderColor={color.white}
                margin="0 4px 0 0"
              >
                {category}
              </Button>
            ))}
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
        <Text size="medium">
          블로거 <s.Strong>고기집 사탕도둑 엄준식</s.Strong>님
        </Text>
        <Text size="small">풍경이 좋은 곳을 자주 찾곤해요.</Text>
      </s.Influencer>
      <s.Cards>
        {hotPlaces?.map((hotPlace) => (
          <Card
            key={hotPlace.id}
            size="small"
            imgSrc={hotPlace.img}
            top={hotPlace.category.map((category) => (
              <Button
                key={category}
                size="xsmall"
                borderColor={color.white}
                margin="0 4px 0 0"
              >
                {category}
              </Button>
            ))}
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
              </Text>,
              <s.Heart key="heart">
                <Img
                  src="/images/sample/heart.svg"
                  shape="normal"
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
