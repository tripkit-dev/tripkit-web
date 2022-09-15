import styled from '@emotion/styled'

import { Direction, Size } from '@enums/Card'
import { Shape } from '@enums/Shape'

import { color } from '@constants/color'
import { css, Interpolation, Theme } from '@emotion/react'

import Img from './Img'

const cardSpace = '36px'

interface SCardProps {
  size?: Size
  direction?: Direction
}

interface Props extends SCardProps {
  imgSrc: string
  top?: React.ReactNode | React.ReactNode[]
  bottom?: React.ReactNode | React.ReactNode[]
  bottomStyle?: Interpolation<Theme>
  borderRadius?: string
}

export default function Card({
  imgSrc,
  size = Size.MEDIUM,
  direction = Direction.ROW,
  top,
  bottom,
  bottomStyle,
  borderRadius
}: Props) {
  return (
    <SCard size={size} direction={direction} style={{ borderRadius }}>
      <Img
        src={imgSrc}
        shape={Shape.NORMAL}
        sideLength="100%"
        containerCss={styles.img}
        layout="fill"
        objectFit="cover"
      />
      <STopArea>{top}</STopArea>
      <SBottomArea css={bottomStyle}>{bottom}</SBottomArea>
    </SCard>
  )
}

export const SCard = styled.li<SCardProps>`
  display: inline-block;
  position: relative;
  overflow: hidden;
  margin: 0 6px;
  padding: 18px;
  border-radius: 4px;
  background-color: ${color.graySkeleton};

  transition: opacity 0.3s;

  * {
    color: ${color.white};
  }

  &:hover {
    opacity: 0.7;
  }

  ${({ size }) => styles[size!]}
  ${({ direction }) => styles[direction!]}
`

export const STopArea = styled.div`
  position: absolute;
  width: calc(100% - ${cardSpace});
  top: 21px;
`

export const SBottomArea = styled.div`
  position: absolute;
  bottom: 21px;
  width: calc(100% - ${cardSpace});
`

const styles = {
  [Size.SMALL]: css`
    width: calc(130px - 34px);
    height: calc(200px - 34px);
    padding: 17px;

    &:first-of-type {
      margin-left: 40px;
    }

    &:last-child {
      margin-right: 40px;
    }
  `,
  [Size.MEDIUM]: css`
    width: calc(160px - ${cardSpace});
    height: calc(228px - ${cardSpace});
  `,
  [Size.LARGE]: css`
    width: calc(310px - ${cardSpace});
    height: calc(200px - ${cardSpace});
  `,
  [Direction.ROW]: css`
    &:first-of-type {
      margin-left: 28px;
    }

    &:last-child {
      margin-right: 28px;
    }
  `,
  [Direction.COLUMN]: css``,
  img: css`
    position: absolute;
    top: 0;
    left: 0;
  `
}
