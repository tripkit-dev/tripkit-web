import { SearchPlaceCategory } from '@search/types'
import { Category } from '@shared/types/Category'

export const categoryModels = {
  walk: '산책',
  exibition: '전시'
}

export const searchCategoryModels: SearchCategoryModels[] = [
  { key: 'cafe', label: '카페' },
  { key: 'restaurant', label: '맛집' },
  { key: 'walk', label: '산책' },
  { key: 'shopping', label: '쇼핑' }
]

interface SearchCategoryModels extends Category {
  key: SearchPlaceCategory
}
