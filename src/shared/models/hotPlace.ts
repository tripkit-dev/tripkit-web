import { HotPlace } from '@shared/types/HotPlace'

import { categoryModels } from './category'

export const hotPlaceModels: HotPlace[] = [
  {
    id: 1,
    category: [categoryModels.walk],
    name: '경주',
    subName: '동궁과 월지',
    info: '식물 센터',
    description: '경주의 밤을\n즐기기 좋은 장소',
    img: '/images/sample/kyungju_01.png',
    date: '2022.07.29 ~ 2022.08.28'
  },
  {
    id: 2,
    category: [categoryModels.walk, categoryModels.exibition],
    name: '군산',
    subName: '철길마을',
    info: '11개의 공원에서 진행',
    description: '과거로 타임슬립!',
    img: '/images/sample/kyungju_02.png',
    date: '2022.07.29 ~ 2022.08.28'
  },
  {
    id: 3,
    category: [categoryModels.walk],
    name: '강릉',
    subName: '하슬라아트월드',
    info: '대천 해수욕장 머드광장 일원',
    description: '강릉의 바다를 사진으로 담아낼 수 있는 장소',
    img: '/images/sample/kunsan_01.png',
    date: '2022.07.29 ~ 2022.08.28'
  },
  {
    id: 4,
    category: [categoryModels.walk, categoryModels.exibition],
    name: '경주',
    subName: '동궁과 월지',
    info: '송도 달빛 축제',
    description: '경주의 밤을\n즐기기 좋은 장소',
    img: '/images/sample/kunsan_02.png',
    date: '2022.07.29 ~ 2022.08.28'
  },
  {
    id: 5,
    category: [categoryModels.walk],
    name: '군산',
    subName: '철길마을',
    info: '고장난 철도 운행',
    description: '과거로 타임슬립!',
    img: '/images/sample/kangneung_01.png',
    date: '2022.07.29 ~ 2022.08.28'
  },
  {
    id: 6,
    category: [categoryModels.walk, categoryModels.exibition],
    name: '강릉',
    subName: '하슬라아트월드',
    info: '동그란 원 속 사람',
    description: '강릉의 바다를 사진으로 담아낼 수 있는 장소',
    img: '/images/sample/kangneung_02.png',
    date: '2022.07.29 ~ 2022.08.28'
  }
]
