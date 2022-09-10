import styled from '@emotion/styled'

import { useEffect, useRef } from 'react'

import { color } from '@constants/color'
import useIntersectionObserver from 'hooks/useIntersectionObserver'

interface Props {
  fetch: (options?: any) => Promise<any>
}

export default function InfiniteScroll({ fetch }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const { entry } = useIntersectionObserver(ref, { freezeOnceVisible: false })

  useEffect(() => {
    if (!entry?.isIntersecting) return

    fetch()
  }, [entry, fetch])

  return <SContainer ref={ref}>불러오는 중입니다</SContainer>
}

const SContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  color: ${color.gray02};
`