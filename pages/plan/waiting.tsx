import styled from '@emotion/styled'

import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

import { Header, Text } from '@shared/components'
import { EllipsisLoading } from '@shared/components/loading'
import { color } from '@shared/constants'
import { routes } from '@shared/libraries'

interface Props {
  region: string
}

export default function Waiting({ region }: Props) {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push({
        pathname: routes.plan.list.path,
        query: {
          region
        }
      })
    }, 1500)

    return () => {
      clearTimeout(timer)
    }
  }, [router, region])

  return (
    <>
      <Header transparentBack />
      <Wrapper>
        <EllipsisLoading />
        <Emoji>🧐</Emoji>
        <Text color={color.main} fontWeight="400" margin="24px 0 12px 0">
          &apos;{region}&apos; 목록을 불러오고 있어요!
        </Text>
        <Text color={color.gray06} size="small">
          조금만 더 기다려주세요!
        </Text>
      </Wrapper>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const region = query.region

  if (!region) {
    return {
      redirect: {
        destination: routes.plan.guide.path
      },
      props: {}
    }
  }

  return {
    props: { region }
  }
}

const Wrapper = styled.section`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  p {
    display: block;
  }
`

const Emoji = styled(Text)`
  font-size: 62px;
  margin-top: -36px;
`
