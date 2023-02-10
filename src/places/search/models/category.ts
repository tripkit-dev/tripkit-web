import { Category, SearchPlaceCategory } from '@search/types'

export const categoryModels = {
  walk: '산책',
  exibition: '전시'
}

export const searchCategoryModels: SearchCategoryModels[] = [
  { key: 'cafe', label: '카페', emoji: 'coffee.svg' },
  { key: 'restaurant', label: '맛집', emoji: 'plate.svg' },
  { key: 'walk', label: '산책', emoji: 'tree.svg' },
  { key: 'shopping', label: '쇼핑', emoji: 'money.svg' },
  { key: 'culture', label: '문화생활', emoji: 'star.svg' }
]

export interface SearchCategoryModels extends Category {
  key: SearchPlaceCategory
  emoji: string
}
