import { useRef } from 'react'

import useIntersectionObserver from 'hooks/useIntersectionObserver'

import SectionTitle from '../SectionTitle'
import Influencer from './Influencer'

const RecommendedPlace = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { entry } = useIntersectionObserver(sectionRef)

  const isIntersecting = entry?.isIntersecting

  return (
    <section ref={sectionRef}>
      <SectionTitle title="추천 장소" subTitle="여행 블로거들은 어디로 갈까?" />
      {isIntersecting && <Influencer />}
    </section>
  )
}

export default RecommendedPlace
