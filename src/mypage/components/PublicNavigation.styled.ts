import styled from '@emotion/styled'

import { color } from '@shared/constants'

export const Container = styled.section`
  margin-top: 61px;
  padding-bottom: 61px;
`

export const Menus = styled.ul`
  max-width: 720px;
  margin: 0 auto;
`

export const Menu = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px 0;
  padding: 14.5px 0;
  border-bottom: 2px solid ${color.gray04};

  color: ${color.gray01};

  &:hover {
    cursor: pointer;
  }
`
