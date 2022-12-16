import { Category, SearchPlaceCategory } from '@search/types'

export const categoryModels = {
  walk: '산책',
  exibition: '전시'
}

export const searchCategoryModels: SearchCategoryModels[] = [
  { key: 'cafe', label: '카페', emoji: '☕️' },
  { key: 'restaurant', label: '맛집', emoji: '🍽' },
  { key: 'walk', label: '산책', emoji: '🌲' },
  { key: 'shopping', label: '쇼핑', emoji: '💸' },
  { key: 'culture', label: '문화생활', emoji: '🌟' }
]

export interface SearchCategoryModels extends Category {
  key: SearchPlaceCategory
  emoji: string
}
