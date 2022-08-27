import * as s from './HotPlace.styled'

import React from 'react'

import { Size } from '@enums/Size'

import { hotPlaceModels } from 'models/hotPlace'

import { Card, Text } from '@components/common'

export default function HotPlace() {
  return (
    <>
      <s.Title>
        <Text size={Size.LARGE}>요즘 핫한 여행지</Text>
        <s.More>더보기</s.More>
      </s.Title>
      <s.Cards>
        {hotPlaceModels.map((hotPlace) => (
          <Card
            key={hotPlace.id}
            imgSrc={hotPlace.img}
            top={
              <Text size={Size.LARGE} css={s.cardTitleStyle}>
                {hotPlace.name}
              </Text>
            }
            bottom={
              <>
                <Text size={Size.SMALL}>{hotPlace.subName}</Text>
                <Text size={Size.X_SMALL} css={s.textHeightStyle} lineClamp={2}>
                  {hotPlace.description}
                </Text>
              </>
            }
          />
        ))}
      </s.Cards>
    </>
  )
}
