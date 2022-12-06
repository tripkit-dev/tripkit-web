import axios from 'axios'

/**
 * @description 길찾기 API는 지도 앱 메인 화면에서 주요 지역까지의 소요 시간과 거리, 예상 유류비, 통행 요금 정보를 제공합니다.
 * @document https://api.ncloud-docs.com/docs/ai-naver-mapsdirections15-driving
 */
const naverApi = {
  driving: ({ start, goal, option = 'trafast' }: DrivingReqeust) => {
    const startString = positionFormatToString(start)
    const goalString = goal
      .map((waypoint) => positionFormatToString(waypoint))
      .join(':')

    return axios.get(
      `https://naveropenapi.apigw.ntruss.com/map-direction-15/v1/driving?start=${startString}&goal=${goalString}&option=${option}`,
      {
        headers: {
          ...naverApiConfig
        }
      }
    )
  }
}

function positionFormatToString([x, y, name]: RequestPositionFormat) {
  return `${x},${y}` + (name ? `,name=${name}` : '')
}

const naverApiConfig = {
  'X-NCP-APIGW-API-KEY-ID': process.env.NEXT_PUBLIC_NAVER_API_KEY_ID!,
  'X-NCP-APIGW-API-KEY': process.env.NEXT_PUBLIC_NAVER_API_KEY!
}

interface DrivingReqeust {
  start: RequestPositionFormat
  goal: MultipleRequestPositionFormat
  option?: Option
}

type RequestPositionFormat = [
  x: number | string,
  y: number | string,
  name?: string
]

type MultipleRequestPositionFormat = [
  waypoint1: RequestPositionFormat,
  waypoint: RequestPositionFormat
]

type Option =
  | 'trafast'
  | 'tracomfort'
  | 'traoptimal'
  | 'traavoidtoll'
  | 'traavoidcaronly'

export default naverApi
