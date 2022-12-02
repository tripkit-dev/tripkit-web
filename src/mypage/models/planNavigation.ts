import { TravelDestinationCategory } from '@mypage/types'
import { routes } from '@shared/libraries'
import { combineQuery } from '@shared/libraries/query'

const planNavigationModels: PlanNavigationModels[] = [
  {
    key: 'own',
    label: '만든 여행지',
    path: combineQuery(routes.mypage.travelDestination.path, {
      category: 'own'
    })
  },
  {
    key: 'share',
    label: '공유한 여행지',
    path: combineQuery(routes.mypage.travelDestination.path, {
      category: 'share'
    })
  },
  {
    key: 'invite',
    label: '초대된 여행지',
    path: combineQuery(routes.mypage.travelDestination.path, {
      category: 'invite'
    })
  },
  {
    key: 'like',
    label: '좋아요한 여행지',
    path: combineQuery(routes.mypage.travelDestination.path, {
      category: 'like'
    })
  }
]

export default planNavigationModels

interface PlanNavigationModels {
  key: TravelDestinationCategory
  label: string
  path: string
}
