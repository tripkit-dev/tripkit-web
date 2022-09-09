import styled from '@emotion/styled'

import React from 'react'

import { Shape } from '@enums/Shape'

import { color } from '@constants/color'
import { css } from '@emotion/react'

import { HeartIcon, Img } from '@components/common'

interface Props {
  children: React.ReactNode
}

function Cards({ children }: Props) {
  return (
    <SContainer>
      <SCards>{children}</SCards>
    </SContainer>
  )
}

interface CardProps {
  imgSrc: string
  bottom?: React.ReactElement
}

function Card({ imgSrc, bottom }: CardProps) {
  return (
    <SCard>
      <Img
        src={imgSrc}
        shape={Shape.NORMAL}
        sideLength="100%"
        containerCss={imgStyle}
        layout="fill"
        objectFit="cover"
      />
      <SBottom>{bottom || 'hi'}</SBottom>
    </SCard>
  )
}

interface HeartProps {
  count?: number
  sideLength?: string
}

function Heart({ count, sideLength }: HeartProps) {
  return (
    <SHeart key="heart">
      <HeartIcon sideLength={sideLength || '16px'} />
      {count}
    </SHeart>
  )
}

interface PeopleProps {
  srcs: string[]
}

function People({ srcs }: PeopleProps) {
  return (
    <SPeople>
      {srcs.map((src, idx) => (
        <Img
          key={src}
          src={src}
          sideLength="38px"
          hasBorder
          containerCss={personStyle(srcs.length - (idx + 1))}
        />
      ))}
    </SPeople>
  )
}

Cards.Card = Card
Cards.Heart = Heart
Cards.People = People

export default Cards

const SContainer = styled.section`
  padding-bottom: 61px;
`

const SCards = styled.ul`
  margin: 0 auto;
  max-width: min(calc(100vw - 32px), 720px);
`

const SCard = styled.li`
  position: relative;
  display: inline-flex;
  align-items: flex-end;
  justify-content: flex-end;
  float: left;

  width: calc(min(calc((100vw - 36px)), 716px) / 4 - 32px);
  height: calc(min(calc((100vw - 36px)), 716px) / 4 - 32px);
  padding: 16px;
  border: 0.5px solid ${color.main};

  overflow: hidden;

  transition: opacity 0.15s;

  &:hover {
    opacity: 0.85;
    cursor: pointer;
  }

  @media screen and (max-width: 720px) {
    & {
      width: calc(calc((100vw - 35px)) / 3 - 32px);
      height: calc(calc((100vw - 35px)) / 3 - 32px);
    }
  }

  @media screen and (max-width: 400px) {
    & {
      width: calc(calc((100vw - 34px)) / 2 - 32px);
      height: calc(calc((100vw - 34px)) / 2 - 32px);
    }
  }
`

const SBottom = styled.div`
  color: ${color.white};
  text-align: right;
`

const imgStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: ${color.mainPlaceholder};
`

const SHeart = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding: 0;
  margin-bottom: 4px;
  background: none;
  text-align: right;

  color: ${color.white};
  font-weight: 600;

  cursor: pointer;

  span {
    margin-right: 4px;
  }
`

const SPeople = styled.div`
  position: relative;
  height: 42px;
  overflow: hidden;
`

const personStyle = (deps: number) =>
  css`
    transform: translateX(${10 * deps}px);
    z-index: ${deps};
  `
