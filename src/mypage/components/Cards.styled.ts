import styled from '@emotion/styled'

import { css } from '@emotion/react'

import { color } from '@shared/constants/color'

export const Container = styled.section`
  padding-bottom: 61px;
`

export const Cards = styled.ul`
  margin: 0 auto;
  max-width: min(calc(100vw - 32px), 720px);
  overflow: hidden;
`

export const Card = styled.li`
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

export const Bottom = styled.div`
  color: ${color.white};
  text-align: right;
`

export const imgStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: ${color.mainPlaceholder};
`

export const Heart = styled.button`
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

export const People = styled.div`
  position: relative;
  height: 42px;
  overflow: hidden;
`

export const personStyle = (deps: number) =>
  css`
    transform: translateX(${10 * deps}px);
    z-index: ${deps};
  `
