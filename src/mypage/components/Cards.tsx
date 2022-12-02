import * as s from './Cards.styled'

import React, { forwardRef } from 'react'

import { HeartIcon, Img } from '@shared/components'

const Cards = forwardRef<HTMLElement, Props>(function Cards({ children }, ref) {
  return (
    <s.Container ref={ref}>
      <s.Cards>{children}</s.Cards>
    </s.Container>
  )
})

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

export function Heart({ count, sideLength }: HeartProps) {
  return (
    <s.Heart key="heart">
      <HeartIcon sideLength={sideLength || '16px'} />
      {count}
    </s.Heart>
  )
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

interface Props {
  children: React.ReactNode
}

interface CardProps {
  imgSrc: string
  bottom?: React.ReactElement
}

interface HeartProps {
  count?: number
  sideLength?: string
}

interface PeopleProps {
  srcs: string[]
}
