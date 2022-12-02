import * as s from './Cards.styled'

import React, { forwardRef } from 'react'

import { HeartIcon, Img } from '@shared/components'

interface Props {
  children: React.ReactNode
}

const Cards = forwardRef<HTMLElement, Props>(function Cards({ children }, ref) {
  return (
    <s.Container ref={ref}>
      <s.Cards>{children}</s.Cards>
    </s.Container>
  )
})

interface CardProps {
  imgSrc: string
  bottom?: React.ReactElement
}

export function Card({ imgSrc, bottom }: CardProps) {
  return (
    <s.Card>
      <Img
        src={imgSrc}
        shape="normal"
        sideLength="100%"
        containerCss={s.imgStyle}
        layout="fill"
        objectFit="cover"
      />
      <s.Bottom>{bottom || 'hi'}</s.Bottom>
    </s.Card>
  )
}

interface HeartProps {
  count?: number
  sideLength?: string
}

export function Heart({ count, sideLength }: HeartProps) {
  return (
    <s.Heart key="heart">
      <HeartIcon sideLength={sideLength || '16px'} />
      {count}
    </s.Heart>
  )
}

interface PeopleProps {
  srcs: string[]
}

export function People({ srcs }: PeopleProps) {
  return (
    <s.People>
      {srcs.map((src, idx) => (
        <Img
          key={idx}
          src={src}
          sideLength="38px"
          hasBorder
          containerCss={s.personStyle(srcs.length - (idx + 1))}
        />
      ))}
    </s.People>
  )
}

export default Cards
