import * as s from './Feed.styled'

import React from 'react'

import { Kind as ButtonKind } from '@enums/Button'
import { Kind as InputKind } from '@enums/Input'
import { Shape } from '@enums/Shape'
import { Size } from '@enums/Size'

import { Img, UncontrolledForm } from '@components/common'
import { Button, Input } from '@components/common'

export default function Feed() {
  return (
    <s.Container>
      <s.Inner>
        <s.Profile>
          <Img
            src="/images/img_profile_example.png"
            priority
            hasBorder
            hasNewIcon
          />
        </s.Profile>

        <s.Weather>
          <Img
            src="/images/sample/weather_windy_sun.png"
            priority
            alt="날씨아이콘"
            css={s.whiteImgStyle}
          />
          <s.Description>
            오늘의 날씨 :<s.Status>맑음</s.Status>
          </s.Description>
        </s.Weather>

        <UncontrolledForm
          onSubmit={(value) => {
            console.log(value)
          }}
          cssStyle={s.formStyle}
        >
          {({ ref, handleSubmit }) => (
            <>
              <Input
                ref={ref}
                kind={InputKind.TERTIARY}
                shape={Shape.ROUND}
                placeholder="어디로 놀러가세요?"
              />

              <Button
                size={Size.X_LARGE}
                kind={ButtonKind.TERTIARY}
                onClick={handleSubmit}
                label="검색"
              />
            </>
          )}
        </UncontrolledForm>
      </s.Inner>
    </s.Container>
  )
}
