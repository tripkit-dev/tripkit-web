import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useRecoilValue } from 'recoil'

import { selectedPlacesState } from 'plan/shared/atoms'

import { Header } from '@shared/components'
import { useAlert } from '@shared/hooks'
import { routes } from '@shared/libraries'

export default function Create() {
  const router = useRouter()
  const alert = useAlert()
  const selectedPlaces = useRecoilValue(selectedPlacesState)

  useEffect(() => {
    if (selectedPlaces.length === 0) {
      alert('선택된 장소가 없어요', 'error')
      router.replace(routes.plan.guide.path)
    }
  }, [alert, router, selectedPlaces])

  return (
    <>
      <Header />
    </>
  )
}
