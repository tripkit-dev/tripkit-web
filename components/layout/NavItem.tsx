import styled from '@emotion/styled'

import React from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { Shape } from '@enums/Shape'
import { Size as TextSize } from '@enums/Text'

import { color } from '@constants/color'
import { css } from '@emotion/react'
import { routes } from 'libraries/routes'

import { Img, Text } from '@components/common'

interface Item {
  icon: string
  path: string
  label: string
}

interface ItemProps {
  item: Item
  idx: number
}

const Item = ({ item, idx }: ItemProps) => {
  const { pathname } = useRouter()

  const regExp = new RegExp(`^${item.path}`, 'g')
  const iaActiveHome = pathname === routes.main.path
  const isActiveTab = idx > 0 ? regExp.test(pathname) : iaActiveHome

  return (
    <Link href={item.path}>
      <SLi active={idx > 0 ? isActiveTab : iaActiveHome}>
        <Img src={item.icon} shape={Shape.NORMAL} sideLength="24px" />
        <Text
          size={TextSize.X_SMALL}
          color={isActiveTab ? color.main : color.gray01}
        >
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
