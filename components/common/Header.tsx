import styled from '@emotion/styled'

import { useRouter } from 'next/router'

interface Props {
  left?: React.ReactNode
  center?: React.ReactNode
  right?: React.ReactNode
}

export default function Header({ left, center, right }: Props) {
  return (
    <Container>
      <Left>{left ?? <Back />}</Left>
      <Center>{center}</Center>
      <Right>{right}</Right>
    </Container>
  )
}

const Back = () => {
  const { back } = useRouter()

  return <SBack onClick={back} title="뒤로가기"></SBack>
}

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 6px);
  height: 44px;
  padding: 3px;
`

const Left = styled.div`
  position: relative;
  height: 100%;
  min-width: 44px;
`

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-width: 80px;
  font-size: 18px;
  font-weight: 600;
`

const Right = styled.div`
  position: relative;
  height: 100%;
  min-width: 44px;
`

const SBack = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #0800ff14 url(/images/sample/ico_back.svg) no-repeat;
  background-size: 27px;
  background-position: 7px center;
  cursor: pointer;
`
