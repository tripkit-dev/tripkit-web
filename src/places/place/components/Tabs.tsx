import styled from '@emotion/styled'

import { css } from '@emotion/react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { color } from '@shared/constants'
import { routes } from '@shared/libraries'

export default function Tabs() {
  const { query } = useRouter()

  const placeId = query.id as string
  const currentTab = query.tab as TabType

  return (
    <STabs>
      {[
        { id: 'menu', label: '메뉴' },
        { id: 'info', label: '정보' }
      ].map((tab) => (
        <Link
          key={tab.id}
          href={{
            pathname: routes.places.place.path,
            query: {
              id: placeId,
              tab: tab.id
            }
          }}
        >
          <SLink type={tab.id === currentTab ? 'primary' : 'secondary'}>
            {tab.label}
          </SLink>
        </Link>
      ))}
    </STabs>
  )
}

const STabs = styled.section`
  height: 54px;
  display: flex;
  margin-bottom: 44px;
`

const SLink = styled.a<{ type: string }>`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom-left-radius: 27px;
  border-bottom-right-radius: 27px;

  box-shadow: 0px 0px 10px #00000014;
  -webkit-box-shadow: 0px 0px 10px #00000014;
  -moz-box-shadow: 0px 0px 10px #00000014;

  ${({ type }) => {
    switch (type) {
      case 'primary':
        return css`
          background-color: ${color.main};
          color: ${color.white};
        `
      case 'secondary':
        return css`
          background-color: ${color.white};
          color: ${color.main};
        `
      default:
        return ''
    }
  }}
`

type TabType = 'info' | 'menu'
