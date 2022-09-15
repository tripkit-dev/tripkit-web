import { SearchPlaceCategory } from '@enums/Category'

import { Category } from 'types/Category'

export const categoryModels = {
  walk: '산책',
  exibition: '전시'
}

export const searchCategoryModels: Category[] = [
  { key: SearchPlaceCategory.CAFE, label: '카페' },
  { key: SearchPlaceCategory.RESTAURANT, label: '맛집' },
  { key: SearchPlaceCategory.WALK, label: '산책' },
  { key: SearchPlaceCategory.SHOPPING, label: '쇼핑' }
]
