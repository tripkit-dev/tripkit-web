import { combineQuery } from '@shared/libraries/query'
import { routes } from '@shared/libraries/routes'
import { TravelDestinationCategory } from '@shared/types/Category'

export const planNavigationModels: PlanNavigationModels[] = [
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

interface PlanNavigationModels {
  key: TravelDestinationCategory
  label: string
  path: string
}
