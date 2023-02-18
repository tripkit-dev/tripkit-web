import styled from '@emotion/styled'

import { css } from '@emotion/react'

import Link from 'next/link'
import React, { ReactElement } from 'react'
import { useQuery } from 'react-query'

import { hotPlaceApi } from '@shared/apis'
import {
  GradationFilm,
  HeartIcon,
  Img,
  Navigation,
  Text
} from '@shared/components'
import { color } from '@shared/constants'
import { useQueryParams } from '@shared/hooks'
import { whiteImgStyle } from '@shared/styles'
import { HotPlace } from '@shared/types'

export default function MyPage() {
  const { region } = useQueryParams<QueryParams>({
    region: ''
  })

  const { data: hotPlaces } = useQuery<HotPlace[]>(
    ['hotPlace/get', region],
    () => hotPlaceApi.get() as Promise<HotPlace[]>,
    { keepPreviousData: true }
  )

  return (
    <>
      <Header>
        <Img
          src="/images/sample/kyungju_02.png"
          shape="normal"
          notSSR
          sideLength="100%"
        />
        <GradationFilm />
        <Summary>
          <TextWrapper>
            <Text color="white" size="large">
              김가나님
            </Text>
            <Text color="white" size="small" fontWeight="300">
              좋아요한 여행지를 모아놨어요!
            </Text>
          </TextWrapper>
          <Img src="/images/img_profile_example.png" hasBorder hasNewIcon />
        </Summary>
      </Header>

      <Divider />

      <Section>
        <Title>좋아요 한 지역</Title>

        <XScroll>
          {CATEGORIES.map((CATEGORY) => (
            <Link
              key={CATEGORY}
              href={{
                query: {
                  region: CATEGORY
                }
              }}
              replace
              shallow
            >
              <Category>
                <Img
                  src="/images/sample/kyungju_02.png"
                  hasBorder={region === CATEGORY}
                  sideLength="42px"
                />
                <Label active={region === CATEGORY}>{CATEGORY}</Label>
              </Category>
            </Link>
          ))}
        </XScroll>
      </Section>

      <Divider />

      <Section>
        <Title>
          좋아요 한 {region}
          <Selected emoji="coffee.svg">카페</Selected>
        </Title>

        <List>
          {hotPlaces?.map((hotPlace) => (
            <Link key={hotPlace.id} href="/mypage">
              <Item>
                <Img
                  src={hotPlace.img}
                  sideLength="100%"
                  shape="normal"
                  layout="fill"
                  objectFit="cover"
                />
                <GradationFilm />
                <Info size="xsmall">{hotPlace.subName}</Info>
                <HeartIcon
                  sideLength="16px"
                  containerCss={css`
                    position: absolute;
                    right: 11px;
                    bottom: 11px;
                    ${whiteImgStyle};
                  `}
                  isFill
                />
              </Item>
            </Link>
          ))}
        </List>
      </Section>
    </>
  )
}

MyPage.getLayout = (page: ReactElement) => (
  <>
    <article style={{ backgroundColor: color.gray08, paddingBottom: 90 }}>
      {page}
    </article>
    <Navigation />
  </>
)

const Header = styled.header`
  height: 66vh;
  max-height: 660px;
  position: relative;
`

const Summary = styled.div`
  position: absolute;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  width: 84vw;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 58px;
`

const Divider = styled.div`
  width: 100%;
  height: 24px;
  background-color: ${color.gray08};
`

const Section = styled.section`
  padding: 16px;
  width: calc(100vw - 32px);
  background-color: ${color.white};
`

const Title = styled(Text)`
  font-weight: 400;
  margin-bottom: 16px;
`

const Selected = styled.strong<{ emoji: string }>`
  font-weight: 400;
  color: ${color.main};
  border-bottom: 2px solid ${color.mainPlaceholder};
  padding: 4px 6px;
  padding-left: 30px;
  margin-left: 6px;

  ${({ emoji }) => css`
    background-image: url(/images/official/${emoji});
    background-repeat: no-repeat;
    background-position: 4px center;
    background-size: 20px;
  `}
`

const XScroll = styled.div`
  width: calc(100% - 24px);
  padding: 0 12px;
  overflow-x: auto;
  white-space: nowrap;
`

const Category = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
`

const Label = styled.strong<{ active: boolean }>`
  font-size: 12px;
  font-weight: 300;
  margin-top: 4px;

  ${({ active }) =>
    active
      ? css`
          color: ${color.main};
          font-weight: 500;
        `
      : ''}
`

const List = styled.ul`
  padding: 8px;
  text-align: center;
`

const Item = styled.li`
  position: relative;
  display: inline-block;
  margin: 0.5%;
  width: 31.3%;
  aspect-ratio: 3/4;
  border-radius: 2px;
  overflow: hidden;
`

const Info = styled(Text)`
  position: absolute;
  left: 11px;
  bottom: 11px;
  width: calc(100% - 40px);
  color: ${color.white};
  font-weight: 500;
  text-align: left;
`

type QueryParams = {
  region?: string
}

const CATEGORIES = [
  '서울',
  '대전',
  '광주',
  '제주도',
  '부산',
  '강릉',
  '인천',
  '수원'
]
