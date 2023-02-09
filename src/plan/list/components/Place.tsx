import styled from '@emotion/styled'

import { css } from '@emotion/react'

import React, { useState } from 'react'

import { color } from '@shared/constants'
import { HotPlace } from '@shared/types'

interface Props {
  place: HotPlace
  left: React.ReactNode
  center: React.ReactNode
  right: React.ReactNode
}

export default function Place({ place, left, center, right }: Props) {
  const [selectedIds, setSelectedIds] = useState<number[]>([])

  const handleSelect = (_id: number) => {
    setSelectedIds((prev) => {
      if (prev.includes(_id)) {
        return prev.filter((id) => id !== _id)
      }

      return [...prev, _id]
    })
  }

  return (
    <Item
      key={place.id}
      selected={selectedIds.includes(place.id)}
      onClick={() => handleSelect(place.id)}
    >
      <Left>{left}</Left>
      <Center>{center}</Center>
      <Right>{right}</Right>
    </Item>
  )
}

const Item = styled.div<{ selected: boolean }>`
  position: relative;
  width: calc(100% - 66px);
  padding: 16px;
  margin: 8px 16px;
  border-radius: 16px;
  border: 1px solid ${color.mainPlaceholder};

  transition: border 0.15s;

  ${({ selected }) =>
    selected
      ? css`
          border: 2px solid ${color.main};
        `
      : ''}
`

const Left = styled.div`
  display: inline-block;
  width: 62px;
  height: 70px;
  margin-right: 12px;
  border-radius: 4px;
  overflow: hidden;
`

const Center = styled.div`
  display: inline-block;
  width: calc(100% - 74px - 48px);

  p {
    display: block;
  }
`

const Right = styled.div`
  position: absolute;
  right: 16px;
  bottom: 16px;
  width: 24px;
  height: 24px;
`
