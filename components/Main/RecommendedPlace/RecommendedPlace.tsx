import { useRef } from 'react'
import { useQuery } from 'react-query'

import { HotPlace as HotPlaceType } from 'types/HotPlace'

import { hotPlaceApi } from 'apis/hotPlace'
import useIntersectionObserver from 'hooks/useIntersectionObserver'
import { withExtractData } from 'libraries/query'

import SectionTitle from '../SectionTitle'
import Influencer from './Influencer'

const RecommendedPlace = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { entry } = useIntersectionObserver(sectionRef)

  const { data: hotPlaces } = useQuery(
    'hotPlace/get',
    () => withExtractData<HotPlaceType[]>(hotPlaceApi.get),
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
