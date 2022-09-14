import styled from '@emotion/styled'

import { css } from '@emotion/react'

import { useQuery } from 'react-query'

import { Size, Size as TextSize } from '@enums/Text'

import { Category } from 'types/Category'
import { HotPlace } from 'types/HotPlace'

import { color } from '@constants/color'
import { hotPlaceApi } from 'apis/hotPlace'

import { Card, HeartIcon, Text } from '@components/common'

interface Props {
  currentCategory: Category
}

const Recommended = ({ currentCategory }: Props) => {
  const { data: hotPlaces } = useQuery<HotPlace[]>(
    ['hotPlace/get', currentCategory.key],
    () => hotPlaceApi.get() as Promise<HotPlace[]>
  )

  return (
    <Container>
      <Text size={TextSize.X_LARGE} margin="0 16px">
        이번주 추천 {currentCategory.label}
      </Text>

      <Cards>
        {hotPlaces?.map((hotPlace) => (
          <Card
            key={hotPlace.id}
            imgSrc={hotPlace.img}
            borderRadius="8px"
            bottom={[
              <Text key="subName" size={Size.SMALL}>
                {hotPlace.subName}
              </Text>,
              <Text
                key="description"
                size={Size.X_SMALL}
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

export default Recommended

const Container = styled.section`
  margin-top: 36px;
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
