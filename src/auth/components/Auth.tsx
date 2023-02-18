import styled from '@emotion/styled'

import Link from 'next/link'

import { Button, Text } from '@shared/components'
import { box, color } from '@shared/constants'
import { useAlert } from '@shared/hooks'
import { routes } from '@shared/libraries'

export default function Auth() {
  const alert = useAlert()

  const notReady = () => {
    alert.normal('아직 지원하지 않는 기능이에요')
  }

  return (
    <Container>
      <Filter />

      <Content>
        <WhiteText size="large" fontWeight="300" margin="0 0 18px 0">
          쉽고 빠른 여행 계획을 위한
        </WhiteText>
        <WhiteText size="3xlarge">TRIP KIT</WhiteText>
        <KakaoButton size="xlarge" kind="secondary" onClick={notReady}>
          카카오 로그인
        </KakaoButton>
        <Link href={routes.main.path} replace>
          <TripkitButton size="xlarge" kind="secondary">
            탐방하기
          </TripkitButton>
        </Link>
        <Join onClick={notReady}>회원가입</Join>
      </Content>

      <ItsBeta size="xsmall">현재 베타버전으로 개발중에 있어요</ItsBeta>
    </Container>
  )
}

const Container = styled.section`
  width: 100%;
  height: 100%;
  background-image: url(/images/sample/stairs.png);
  background-size: cover;
  background-position: center;
`

const Filter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
`

const Content = styled.div`
  width: 90%;
  max-width: ${box.CONTENT_MAX_WIDTH};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`

const WhiteText = styled(Text)`
  width: 100%;
  text-align: center;
  color: ${color.white};
`

const KakaoButton = styled(Button)`
  position: relative;
  border-color: #fee500;
  background-color: #fee500;
  color: ${color.black};
  width: 100%;
  margin-top: 82px;

  &::before {
    content: ' ';
    position: absolute;
    top: 50%;
    left: 30px;
    transform: translateY(-50%);
    background-image: url(/images/sample/kakao.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 18px;
    height: 18px;
  }
`

const TripkitButton = styled(Button)`
  position: relative;
  border-color: ${color.white};
  background-color: ${color.white};
  color: ${color.black};
  width: 100%;
  margin-top: 22px;

  &::before {
    content: 'TRIP KIT';
    position: absolute;
    top: 50%;
    left: 30px;
    transform: translateY(-50%);
    color: ${color.main};
    font-size: 12px;
  }
`

const Join = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: 52px;
  padding: 6px;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid ${color.white};
  color: ${color.white};
  font-weight: 300;
  font-size: 16px;
`

const ItsBeta = styled(WhiteText)`
  position: absolute;
  left: 50%;
  bottom: 64px;
  transform: translateX(-50%);
`
