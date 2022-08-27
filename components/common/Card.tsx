import styled from '@emotion/styled'

import { Size } from '@enums/Card'
import { Shape } from '@enums/Shape'

import { color } from '@constants/color'
import { css } from '@emotion/react'

import Img from './Img'

const space = '36px'

interface SCardProps {
  size?: Size
}

interface Props extends SCardProps {
  imgSrc: string
  top?: React.ReactNode | React.ReactNode[]
  bottom?: React.ReactNode | React.ReactNode[]
}

export default function Card({
  imgSrc,
  size = Size.MEDIUM,
  top,
  bottom
}: Props) {
  return (
    <SCard size={size}>
      <Img
        src={imgSrc}
        shape={Shape.NORMAL}
        sideLength="100%"
        containerCss={styles.img}
        layout="fill"
        objectFit="cover"
      />
      <STopArea>{top || '제목'}</STopArea>
      <SBottomArea>
        {bottom || (
          <>
            하단
            <br />
            최하단
          </>
        )}
      </SBottomArea>
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

  &:first-of-type {
    margin-left: 28px;
  }

  &:last-child {
    margin-right: 28px;
  }

  &:hover {
    opacity: 0.7;
  }

  ${({ size }) => styles[size!]}
`

export const STopArea = styled.div`
  margin-top: 9px;
`

export const SBottomArea = styled.div`
  position: absolute;
  bottom: 21px;
  width: calc(100% - ${space});
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
    width: calc(160px - ${space});
    height: calc(228px - ${space});
  `,
  [Size.LARGE]: css`
    width: calc(310px - ${space});
    height: calc(200px - ${space});
  `,
  img: css`
    position: absolute;
    top: 0;
    left: 0;
  `
}
