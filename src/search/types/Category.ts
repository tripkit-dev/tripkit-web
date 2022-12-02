export const ALL_SEARCH_PLACE_CATEGORIES = [
  'cafe',
  'restaurant',
  'walk',
  'shopping'
] as const
type SearchPlaceCategoryTuple = typeof ALL_SEARCH_PLACE_CATEGORIES
export type SearchPlaceCategory = SearchPlaceCategoryTuple[number]
