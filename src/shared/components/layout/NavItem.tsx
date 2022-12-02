import styled from '@emotion/styled'

import { css } from '@emotion/react'

import React from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { Img, Text } from '@shared/components'
import { color } from '@shared/constants'
import { combineQuery } from '@shared/libraries/query'
import { routes } from '@shared/libraries/routes'

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
  const isActiveHome = pathname === routes.main.path
  const isActiveTab =
    idx > 0 ? !isActiveHome && regExp.test(pathname) : isActiveHome

  return (
    <Link href={combineQuery(item.basePath, item.query)}>
      <SLi active={isActiveTab}>
        <Img src={item.icon} shape="normal" sideLength="24px" />
        <Text size="xsmall" color={isActiveTab ? color.main : color.gray01}>
          {item.label}
        </Text>
      </SLi>
    </Link>
  )
}

export default React.memo(Item)

interface SLiProps {
  active: boolean
}

const SLi = styled.li<SLiProps>`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  p {
    margin-top: 8px;
  }

  ${({ active }) =>
    active
      ? css`
          &::before {
            content: ' ';
            position: absolute;
            top: -8px;
            left: 50%;
            width: 14px;
            height: 14px;
            transform: translateX(-50%);

            background-color: ${color.main};
            border: 1px solid ${color.white};
            border-radius: 50%;
          }
        `
      : ''}
`
