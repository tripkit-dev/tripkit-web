import { TravelDestinationCategory } from '@shared/enums/Category'
import { combineQuery } from '@shared/libraries/query'
import { routes } from 'libraries/routes'

export const planNavigationModels = [
  {
    key: TravelDestinationCategory.OWN,
    label: '만든 여행지',
    path: combineQuery(routes.mypage.travelDestination.path, {
      category: TravelDestinationCategory.OWN
    })
  },
  {
    key: TravelDestinationCategory.SHARE,
    label: '공유한 여행지',
    path: combineQuery(routes.mypage.travelDestination.path, {
      category: TravelDestinationCategory.SHARE
    })
  },
  {
    key: TravelDestinationCategory.INVITE,
    label: '초대된 여행지',
    path: combineQuery(routes.mypage.travelDestination.path, {
      category: TravelDestinationCategory.INVITE
    })
  },
  {
    key: TravelDestinationCategory.LIKE,
    label: '좋아요한 여행지',
    path: combineQuery(routes.mypage.travelDestination.path, {
      category: TravelDestinationCategory.LIKE
    })
  }
]
