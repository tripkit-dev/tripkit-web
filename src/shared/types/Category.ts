export interface Category {
  key: string
  label: string
}

export const ALL_TRAVEL_DESTINATION_CATEGORIES = [
  'own',
  'share',
  'invite',
  'like'
] as const
type TravelDestinationCategoryTuple = typeof ALL_TRAVEL_DESTINATION_CATEGORIES
export type TravelDestinationCategory = TravelDestinationCategoryTuple[number]

export const ALL_SEARCH_PLACE_CATEGORIES = [
  'cafe',
  'restaurant',
  'walk',
  'shopping'
] as const
type SearchPlaceCategoryTuple = typeof ALL_SEARCH_PLACE_CATEGORIES
export type SearchPlaceCategory = SearchPlaceCategoryTuple[number]
