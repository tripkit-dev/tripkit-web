import { routes } from '@shared/libraries'

import { TravelDestinationCategory } from '@mypage/types'

const planNavigationModels: PlanNavigationModels[] = [
  {
    key: 'own',
    label: '만든 여행지',
    path: routes.mypage.travelDestination.path,
    query: {
      category: 'own'
    }
  },
  {
    key: 'share',
    label: '공유한 여행지',
    path: routes.mypage.travelDestination.path,
    query: {
      category: 'share'
    }
  },
  {
    key: 'invite',
    label: '초대된 여행지',
    path: routes.mypage.travelDestination.path,
    query: {
      category: 'invite'
    }
  },
  {
    key: 'like',
    label: '좋아요한 여행지',
    path: routes.mypage.travelDestination.path,
    query: {
      category: 'like'
    }
  }
]

export default planNavigationModels

interface PlanNavigationModels {
  key: TravelDestinationCategory
  label: string
  path: string
  query: {
    [key: string]: string
  }
}
