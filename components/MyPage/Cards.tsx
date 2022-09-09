import styled from '@emotion/styled'

import React from 'react'

import { Shape } from '@enums/Shape'

import { color } from '@constants/color'
import { css } from '@emotion/react'

import { Img } from '@components/common'

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

Cards.Card = Card

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
  display: inline-block;
  width: calc(min(calc((100vw - 36px)), 716px) / 4);
  height: calc(min(calc((100vw - 36px)), 716px) / 4);
  border: 0.5px solid ${color.main};

  transition: opacity 0.15s;

  &:hover {
    opacity: 0.85;
    cursor: pointer;
  }

  @media screen and (max-width: 720px) {
    & {
      width: calc(calc((100vw - 35px)) / 3);
      height: calc(calc((100vw - 35px)) / 3);
    }
  }

  @media screen and (max-width: 400px) {
    & {
      width: calc(calc((100vw - 34px)) / 2);
      height: calc(calc((100vw - 34px)) / 2);
    }
  }
`

const SBottom = styled.div`
  margin-top: calc(100% - 40px);
  padding-right: 16px;

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
