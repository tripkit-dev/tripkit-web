import * as s from './Feed.styled'

import { useRouter } from 'next/router'
import React from 'react'
import { useSetRecoilState } from 'recoil'

import { searchState } from '@shared/atoms/search'
import {
  Button,
  ControlledForm,
  ControlledInput,
  Img
} from '@shared/components'
import { color } from '@shared/constants'
import { routes } from '@shared/libraries'

export default function Feed() {
  const { push } = useRouter()
  const setSearchValue = useSetRecoilState(searchState)

  const handleSubmit = (value: string) => {
    setSearchValue(value)
    push({
      pathname: routes.places.path,
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
          <Img src="/images/official/sun-white.svg" priority alt="날씨아이콘" />
          <s.Description>
            오늘의 날씨 :<s.Status>맑음</s.Status>
          </s.Description>
        </s.Weather>

        <ControlledForm onSubmit={handleSubmit} cssStyle={s.formStyle}>
          {({ value, onChange, onSubmit }) => (
            <>
              <ControlledInput
                kind="tertiary"
                shape={'round'}
                placeholder="어디로 놀러가세요?"
                onChange={onChange}
                value={value}
                cssStyle={s.inputStyle}
              />

              {!value && <s.SearchIcon src="/images/official/search-1.svg" />}

              <Button
                size="xlarge"
                kind={value ? 'primary' : 'tertiary'}
                borderColor={color.white}
                onClick={onSubmit}
                cssStyle={s.buttonStyle}
              >
                검색
              </Button>
            </>
          )}
        </ControlledForm>
      </s.Inner>
    </s.Container>
  )
}
