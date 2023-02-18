import styled from '@emotion/styled'

import { css } from '@emotion/react'

import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import { Img } from '@shared/components'
import { routes } from '@shared/libraries'
import { mainColorFilterStyle } from '@shared/styles'

interface Item {
  icon: string
  basePath: string
  query?: object
  label: string
}

interface ItemProps {
  item: Item
  idx: number
}

const Item = ({ item, idx }: ItemProps) => {
  const { pathname } = useRouter()

  const regExp = new RegExp(`^${item.basePath}`, 'g')
  const isActiveHome = pathname === routes.home.path
  const isActiveTab =
    idx > 0 ? !isActiveHome && regExp.test(pathname) : isActiveHome

  return (
    <Link
      href={{
        pathname: item.basePath,
        query: {
          ...item.query
        }
      }}
    >
      <SLi active={isActiveTab} logo={item.icon}>
        <Img src={item.icon} shape="normal" sideLength="40px" />
      </SLi>
    </Link>
  )
}

export default React.memo(Item)

interface SLiProps {
  active: boolean
  logo: string
}

const SLi = styled.li<SLiProps>`
  flex: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ active }) =>
    active
      ? mainColorFilterStyle
      : css`
          filter: invert(44%) sepia(8%) saturate(14%) hue-rotate(342deg)
            brightness(92%) contrast(92%);
        `}
`
