import { useRef } from 'react'
import { useQuery } from 'react-query'

import { hotPlaceApi } from '@shared/apis'
import { useIntersectionObserver } from '@shared/hooks'
import { HotPlace as HotPlaceType } from '@shared/types'

import Influencer from './Influencer'
import SectionTitle from './SectionTitle'

const RecommendedPlace = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { entry } = useIntersectionObserver(sectionRef)

  const { data: hotPlaces } = useQuery<HotPlaceType[]>(
    'hotPlace/get',
    () => hotPlaceApi.get() as Promise<HotPlaceType[]>,
    { enabled: entry?.isIntersecting }
  )

  return (
    <section ref={sectionRef}>
      <SectionTitle title="추천 장소" subTitle="여행 블로거들은 어디로 갈까?" />
      <Influencer hotPlaces={hotPlaces} />
    </section>
  )
}

export default RecommendedPlace
