import styled from '@emotion/styled'

import { css, Interpolation, Theme } from '@emotion/react'

import Link from 'next/link'
import { Fragment } from 'react'

import { Url } from 'url'

import { color } from '@shared/constants'

import { GradationFilm } from './Film'
import Img from './Img'

const cardSpace = '36px'

export default function Card({
  imgSrc,
  size = 'medium',
  direction = 'row',
  top,
  linkProps,
  bottom,
  bottomStyle,
  borderRadius,
  notSSR
}: Props) {
  const content = (
    <Fragment>
      <Img
        src={imgSrc}
        shape="normal"
        sideLength="100%"
        containerCss={styles.img}
        layout="fill"
        objectFit="cover"
        notSSR={notSSR}
      />
      <STopArea>{top}</STopArea>
      <SBottomArea css={bottomStyle}>{bottom}</SBottomArea>
      <GradationFilm />
    </Fragment>
  )

  return (
    <SCard size={size} direction={direction} style={{ borderRadius }}>
      {linkProps ? (
        <Link {...linkProps}>
          <a>{content}</a>
        </Link>
      ) : (
        content
      )}
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
  z-index: 1;
`

export const SBottomArea = styled.div`
  position: absolute;
  bottom: 21px;
  width: calc(100% - ${cardSpace});
  z-index: 1;
`

const styles = {
  small: css`
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
  medium: css`
    width: calc(160px - ${cardSpace});
    height: calc(228px - ${cardSpace});
  `,
  large: css`
    width: calc(310px - ${cardSpace});
    height: calc(200px - ${cardSpace});
  `,
  row: css`
    &:first-of-type {
      margin-left: 28px;
    }

    &:last-child {
      margin-right: 28px;
    }
  `,
  column: css``,
  img: css`
    position: absolute;
    top: 0;
    left: 0;
  `
}

interface SCardProps {
  size?: 'small' | 'medium' | 'large'
  direction?: 'row' | 'column'
}

interface Props extends SCardProps {
  imgSrc: string
  top?: React.ReactNode | React.ReactNode[]
  bottom?: React.ReactNode | React.ReactNode[]
  bottomStyle?: Interpolation<Theme>
  borderRadius?: string
  notSSR?: boolean
  linkProps?: LinkProps
}

interface LinkProps {
  href: Url | string
  as?: string
}
