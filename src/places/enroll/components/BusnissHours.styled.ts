import styled from '@emotion/styled'

import { Button as CommonButton, Text as CommonText } from '@shared/components'
import { color } from '@shared/constants'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const Button = styled(CommonButton)`
  width: 120px;
  height: 28px;
  position: relative;
`

export const Line = styled.div`
  width: 24px;
  height: 0px;
  border: 1px solid ${color.gray06};
`

export const TimePicker = styled.section`
  position: absolute;
  width: 200px;
  padding: 24px 18px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${color.white};
  text-align: center;
  border-radius: 5px;
`

export const Text = styled(CommonText)`
  width: 100%;
  text-align: left;
  margin-bottom: 20px;
`
