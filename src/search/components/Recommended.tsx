import styled from '@emotion/styled'

import { css } from '@emotion/react'

import { useRouter } from 'next/router'
import React from 'react'
import { useQuery } from 'react-query'

import { hotPlaceApi } from '@shared/apis'
import { Card, HeartIcon, Text } from '@shared/components'
import { color } from '@shared/constants'
import { HotPlace } from '@shared/types'

import { searchCategoryModels } from '@search/models'
import { Category, SearchPlaceCategory } from '@search/types'

const DEFAULT_CATEGORY: SearchPlaceCategory = 'cafe'

const Recommended = () => {
  const { query } = useRouter()
  const currentCategoryKey = query.category || DEFAULT_CATEGORY
  const currentCategory = searchCategoryModels.find(
    (category) => category.key === currentCategoryKey
  ) as Category

  const { data: hotPlaces } = useQuery<HotPlace[]>(
    ['hotPlace/get', currentCategory.key],
    () => hotPlaceApi.get() as Promise<HotPlace[]>
  )

  return (
    <Container>
      <Text size="xlarge" margin="0 16px">
        이번주 추천 {currentCategory.label}
      </Text>

      <Cards>
        {hotPlaces?.map((hotPlace) => (
          <Card
            key={hotPlace.id}
            imgSrc={hotPlace.img}
            borderRadius="8px"
            bottom={[
              <Text key="subName" size="small">
                {hotPlace.subName}
              </Text>,
              <Text
                key="description"
                size="xsmall"
                css={descriptionStyle}
                lineClamp={2}
              >
                {hotPlace.description}
              </Text>,
              <HeartIcon key="heart" containerCss={heartIconStyle} />
            ]}
          />
        ))}
      </Cards>
    </Container>
  )
}

export default React.memo(Recommended)

const Container = styled.article`
  margin-top: 18px;
`

const Cards = styled.ul`
  width: 100%;
  height: 228px;
  margin-top: 6px;
  padding: 12px 0;
  background-color: ${color.gray04};
  overflow-y: hidden;
  overflow-x: auto;

  white-space: nowrap;
`

const descriptionStyle = css`
  width: calc(100% - 24px);
  height: 32px;
  margin-top: 8px;
`

const heartIconStyle = css`
  position: absolute;
  right: 0;
  bottom: 0;
`
