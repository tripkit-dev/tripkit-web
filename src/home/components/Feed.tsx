import * as s from './Feed.styled'

import React from 'react'
import { useSetRecoilState } from 'recoil'

import { useRouter } from 'next/router'

import { searchState } from '@shared/atoms/search'
import { Button, Img, Input, UnControlledForm } from '@shared/components'
import { color } from '@shared/constants'
import { routes } from '@shared/libraries'
import { whiteImgStyle } from '@shared/styles'

export default function Feed() {
  const { push } = useRouter()
  const setSearchValue = useSetRecoilState(searchState)

  const handleSubmit = (value: string) => {
    setSearchValue(value)
    push({
      pathname: routes.search.path,
      query: {
        place: value
      }
    })
  }

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
            css={whiteImgStyle}
          />
          <s.Description>
            오늘의 날씨 :<s.Status>맑음</s.Status>
          </s.Description>
        </s.Weather>

        <UnControlledForm onSubmit={handleSubmit} cssStyle={s.formStyle}>
          {({ ref, handleSubmit }) => (
            <>
              <Input
                ref={ref}
                kind="tertiary"
                shape={'round'}
                placeholder="어디로 놀러가세요?"
                cssStyle={s.inputStyle}
              />

              <Button
                size="xlarge"
                kind="primary"
                borderColor={color.white}
                onClick={handleSubmit}
                cssStyle={s.buttonStyle}
              >
                검색
              </Button>
            </>
          )}
        </UnControlledForm>
      </s.Inner>
    </s.Container>
  )
}
