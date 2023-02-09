import styled from '@emotion/styled'

import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
import { resetServerContext } from 'react-beautiful-dnd'
import { useRecoilValue } from 'recoil'

import { DailyPlan, TravelPlan } from 'plan/index/components'
import { selectedPlacesState } from 'plan/shared/atoms'

import { Header, Img, Map, Text } from '@shared/components'
import { ControlledInput } from '@shared/components'
import { box, color } from '@shared/constants'
import { useAlert, usePopup } from '@shared/hooks'
import { routes } from '@shared/libraries'

interface Props {
  region: string
}

export default function List({ region }: Props) {
  const router = useRouter()
  const alert = useAlert()
  const [, handler] = usePopup()
  const selectedPlaces = useRecoilValue(selectedPlacesState)
  const [form, setForm] = useState<Form>({
    title: ''
  })

  console.log(form, region)

  const handleTitle = useCallback(
    (v: string) => setForm((prev) => ({ ...prev, title: v })),
    [setForm]
  )

  useEffect(() => {
    if (selectedPlaces.length === 0) {
      alert.error('선택된 장소가 없어요')
      router.replace(routes.plan.guide.path)
    }
  }, [alert, router, selectedPlaces])

  useEffect(() => {
    const onBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault()
      e.returnValue = '정말?'
    }

    window.addEventListener('beforeunload', onBeforeUnload)
    return () => {
      window.removeEventListener('beforeunload', onBeforeUnload)
    }
  }, [handler])

  return (
    <>
      <Header />
      <Input
        shape="round"
        placeholder="| 여행 제목은?"
        onChange={handleTitle}
      />
      <Map
        centerPosition={{ lat: 37.787429826238, lng: 128.9260850932 }}
        markers={[
          {
            position: { lat: 37.787429826238, lng: 128.9260850932 },
            name: '엔드 투 엔드'
          },
          {
            position: { lat: 37.78650981621, lng: 128.924984091 },
            name: '카페 2572'
          }
        ]}
      />
      <Text fontWeight="400" margin="32px 0 12px 40px">
        이번 여행지에 갈 곳들!
      </Text>
      <XScrollUl>
        {selectedPlaces.map((place) => (
          <ImgLi key={place.id}>
            <Img src={place.img} />
          </ImgLi>
        ))}
      </XScrollUl>
      <CentralText size="xsmall" color={color.gray05}>
        꾹 누르면 드래그 이동이 가능해요!
      </CentralText>
      <TravelPlan>
        {({ plans }) => (
          <>
            {plans.map((plan, index) => (
              <DailyPlan key={index} plan={plan} day={index + 1} />
            ))}
          </>
        )}
      </TravelPlan>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const region = query.region

  resetServerContext()

  if (!region) {
    return {
      redirect: {
        destination: routes.plan.guide.path
      },
      props: {}
    }
  }

  return {
    props: {
      region
    }
  }
}

type Form = {
  title: string
}

const Input = styled(ControlledInput)`
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
  width: calc(80vw - 48px);
  max-width: calc(${box.CONTENT_MAX_WIDTH} - 48px);
`

const XScrollUl = styled.ul`
  padding: 12px;
  width: calc(100% - 24px);
  height: calc(86px - 24px);
  overflow-x: auto;
  white-space: nowrap;
  background-color: ${color.gray08};
`

const ImgLi = styled.li`
  margin: 0 8px;
  display: inline-block;
`

const CentralText = styled(Text)`
  display: block;
  text-align: center;
  margin-top: 24px;
`
