import styled from '@emotion/styled'

import { GetServerSideProps } from 'next'
import Link from 'next/link'
import React from 'react'
import { useRecoilValue } from 'recoil'

import { Place } from '@list/components'
import { selectedPlacesState } from 'plan/shared/atoms'

import {
  Button,
  CategorySelector,
  Header,
  HeartIcon,
  Img,
  Text
} from '@shared/components'
import { box, color } from '@shared/constants'
import { useQueryParams } from '@shared/hooks'
import { routes } from '@shared/libraries'
import { hotPlaceModels } from '@shared/models'

interface Props {
  region: string
}

export default function List({ region }: Props) {
  const selectedList = useRecoilValue(selectedPlacesState)
  const { category } = useQueryParams<QueryParams>({
    category: ''
  })

  return (
    <>
      <Header center={region} right={<HeartIcon sideLength="18px" />} />
      <CategorySelector />
      <Container>
        <CentralText color={color.main} fontWeight="400">
          가고싶은 장소를 선택해주세요!
        </CentralText>
        {category &&
          hotPlaceModels.map((place) => (
            <Place
              key={place.id}
              place={place}
              left={
                <Img
                  src={place.img}
                  shape="normal"
                  sideLength="100%"
                  layout="fill"
                  objectFit="cover"
                />
              }
              center={
                <>
                  <Text lineClamp={1} fontWeight="500">
                    {place.name}
                  </Text>
                  <Text
                    size="xsmall"
                    lineClamp={1}
                    fontWeight="300"
                    margin="0 0 17px 0"
                  >
                    {place.subName}
                  </Text>
                  <Text size="xsmall" lineClamp={1} fontWeight="300">
                    {place.info}
                  </Text>
                </>
              }
              right={<HeartIcon sideLength="24px" />}
            />
          ))}
        {selectedList.length > 0 && (
          <Link
            href={{
              pathname: routes.plan.path,
              query: {
                region
              }
            }}
          >
            <Submit size="xlarge">완료</Submit>
          </Link>
        )}
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const region = query.region

  if (!region) {
    return {
      redirect: {
        destination: routes.plan.guide.path
      },
      props: {}
    }
  }

  return {
    props: { region }
  }
}

type QueryParams = {
  category: string
}

const Container = styled.div`
  max-width: ${box.CONTENT_MAX_WIDTH};
  margin: 0 auto;
  padding-bottom: 88px;
`

const CentralText = styled(Text)`
  width: 100%;
  text-align: center;
  margin-bottom: 12px;
`

const Submit = styled(Button)`
  position: fixed;
  left: 50%;
  bottom: calc(76px + 42px);
  transform: translateX(-50%);
  width: 80%;
  max-width: calc(${box.CONTENT_MAX_WIDTH} - 42px);
  box-shadow: 0px 6px 12px -1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 6px 12px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 6px 12px -1px rgba(0, 0, 0, 0.75);
`
