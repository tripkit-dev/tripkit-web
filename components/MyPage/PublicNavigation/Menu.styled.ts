import styled from '@emotion/styled'

import { color } from '@constants/color'

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
