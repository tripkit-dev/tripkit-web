import styled from '@emotion/styled'

import { useMemo } from 'react'
import { useRecoilValue } from 'recoil'

import { searchState } from '@shared/atoms/search'
import { box, color } from '@shared/constants'
import { routes } from '@shared/libraries'

import NavItem from './NavItem'

export default function Navigation() {
  const searchValue = useRecoilValue(searchState)

  const list = useMemo(
    () => [
      {
        icon: '/images/official/nav-home-white.svg',
        basePath: routes.main.path,
        label: '홈'
      },
      {
        icon: '/images/official/nav-mypage-white.svg',
        basePath: routes.mypage.path,
        label: '마이페이지'
      },
      {
        icon: '/images/official/nav-search-white.svg',
        basePath: routes.places.path,
        query: {
          keyword: searchValue
        },
        label: '탐색'
      },
      {
        icon: '/images/official/nav-plan-white.svg',
        basePath: routes.plan.path,
        label: '계획하기'
      }
    ],
    [searchValue]
  )

  return (
    <Container>
      <SUl>
        {list.map((item, idx) => (
          <NavItem key={item.basePath} item={item} idx={idx} />
        ))}
      </SUl>
    </Container>
  )
}

const Container = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 76px;
  background-color: ${color.white};

  z-index: 99;
`

const SUl = styled.ul`
  max-width: ${box.CONTENT_MAX_WIDTH};
  display: flex;
  align-items: stretch;
  justify-content: space-evenly;
  height: 100%;
  margin: 0 auto;
`
