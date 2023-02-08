import { Big, Content, Submit, WhiteText, XControlDiv } from './styled'
import styled from '@emotion/styled'

import { css } from '@emotion/react'

import Link from 'next/link'
import React, { useState } from 'react'

import { GradationFilm, HeartIcon, Img, Text } from '@shared/components'
import { box, color } from '@shared/constants'
import { useWindowSize } from '@shared/hooks'
import { routes } from '@shared/libraries'
import { whiteImgStyle } from '@shared/styles'

const Third = () => {
  const { width } = useWindowSize()
  const [selected, setSelected] = useState<CATEGORY_TYPE>()

  const isSelected = !!selected

  const handleSelect = (category: CATEGORY_TYPE) => {
    setSelected(category)
  }

  return (
    <XControlDiv x={(width || 0) * 2}>
      <Img
        src="/images/sample/jamsil_01.png"
        shape="normal"
        sideLength="100%"
        layout="fill"
        objectFit="cover"
      />
      <GradationFilm />
      <Content isTop>
        <WhiteText size="xlarge" fontWeight="500" margin="0 0 32px 0">
          어디로 여행가세요? <Big>💬</Big>
        </WhiteText>
        <WhiteText fontWeight="400">
          &apos;좋아요&apos;한 지역을 가져왔어요!
        </WhiteText>
        <Ul>
          {CATEGORIES.map((CATEGORY) => (
            <Li
              key={CATEGORY}
              onClick={() => handleSelect(CATEGORY)}
              selected={selected === CATEGORY}
            >
              <Text size="small" lineClamp={1}>
                {CATEGORY}
              </Text>
            </Li>
          ))}
        </Ul>
      </Content>
      {isSelected && (
        <>
          <Summary size="small" fontWeight="300">
            이제 가고 싶은 곳을 선택해볼까요?
          </Summary>
          <Link
            href={{
              pathname: routes.plan.waiting.path,
              query: {
                region: selected
              }
            }}
          >
            <Submit>
              <HeartIcon
                containerCss={css`
                  ${whiteImgStyle};
                  margin-right: 12px;
                `}
                sideLength="18px"
              />
              불러오기
            </Submit>
          </Link>
        </>
      )}
    </XControlDiv>
  )
}

export default Third

const CATEGORIES = ['서울', '수원', '부산', '제주도', '강릉', '인천'] as const
type CATEGORY_TUPLE = typeof CATEGORIES
type CATEGORY_TYPE = CATEGORY_TUPLE[number]

const Ul = styled.ul`
  margin-top: 48px;
  text-align: left;
  list-style: none;
`

const Li = styled.li<{ selected?: boolean }>`
  min-width: 60px;
  width: calc(19% - 2px);
  height: 38px;
  margin: 2%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  border: 1px solid ${color.white};
  color: ${color.white};
  background-color: ${color.transparentWhite20};

  transition: background-color 0.1s;

  ${({ selected }) =>
    selected
      ? css`
          background-color: ${color.main};
        `
      : ''}
`

const Summary = styled(WhiteText)`
  position: absolute;
  left: 50%;
  bottom: 140px;
  transform: translateX(-50%);
  max-width: ${box.CONTENT_MAX_WIDTH};
  width: calc(78vw - 24px);
  text-align: center;
`
