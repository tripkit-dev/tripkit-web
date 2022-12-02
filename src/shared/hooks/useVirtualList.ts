import { useCallback, useEffect, useRef, useState } from 'react'

interface Props<T> {
  totalList: T[]
}

const useVirtualList = <T>({ totalList }: Props<T>) => {
  const ref = useRef<HTMLUListElement>(null)
  const [list, setList] = useState<T[]>([])
  const [totalHeight, setTotalHeight] = useState<number>(0)
  const [scrollTop, setScrollTop] = useState<number>(0)

  const curHeight = ref.current ? ref.current.clientHeight : 0 // 현재 Viewport 의 높이 (Viewport의 높이를 %로 주었기 때문에 따로 계산)
  const itemHeight = 130 // 렌더링되는 영역의 높이 (Item 태그의 경우 height 80px, margin 10px 로 총 80+10+10 = 100px 임)
  const nodeCounts = Math.floor(curHeight / itemHeight) + 1 // 현재 화면에 보이는 아이템의 수
  const startIndex = Math.max(
    0,
    Math.floor(scrollTop / itemHeight) - nodeCounts
  )
  const endIndex = startIndex + 2 * nodeCounts + 1
  const offsetY = startIndex * itemHeight // 갱신할 Y축 위치

  const onScrollHeight = useCallback(() => {
    if (ref.current) {
      setScrollTop(ref.current.scrollTop) // 현재 스크롤 위치를 갱신
    }
  }, [])

  const onScrollTop = useCallback(() => {
    if (ref.current) {
      ref.current.scrollTo({ top: 0 })
    }
  }, [])

  const onFetchSuccess = useCallback(
    (_totalList: T[]) => {
      setTotalHeight(_totalList.length * itemHeight)

      ref.current?.removeEventListener('scroll', onScrollHeight) // scroll 기존 이벤트 해제
      ref.current?.addEventListener('scroll', onScrollHeight) // scroll 이벤트 연결
    },
    [onScrollHeight]
  )

  // 전체 데이터가 바뀌거나, startIndex 가 바뀌면 새로운 데이터를 렌더링 해줘야함
  useEffect(() => {
    setList(totalList.slice(startIndex, endIndex))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalList, startIndex])

  return {
    ref,
    list,
    totalHeight,
    offsetY,
    onFetchSuccess,
    onScrollTop
  }
}

export default useVirtualList

/*
    startIndex, endIndex : 렌더링할 데이터 시작 idx(startIndex), 마지막 idx(endIndex)

    startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - nodeCounts)의 의미
    - Math.floor(scrollTop / itemHeight) : 현재 Viewport 최상단에 보이는 데이터의 인덱스
    - nodeCounts 은 현재 화면에 보이는 아이템의 수
    => 스크롤을 내렸을 때 Viewport 에 보이는 최상단 데이터가 화면에 보이는 아이템의 수를 넘어갈 때부터 인덱스를 구하여 새로운 데이터를 렌더링 해야함 !!

    endIndex = startIndex + 2 * nodeCounts + 1의 의미
    - startIndex + nodeCounts : 현재 보이지 않는 스크롤로 내린 데이터
    - startIndex + 2 * nodeCounts : Viewport 로 보이는 데이터
    - + 1 을 해준 이유는 Viewport 의 마지막 데이터가 가끔 누락되는 경우가 있어서!
     */
