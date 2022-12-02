export const ALL_TRAVEL_DESTINATION_CATEGORIES = [
  'own',
  'share',
  'invite',
  'like'
] as const
type TravelDestinationCategoryTuple = typeof ALL_TRAVEL_DESTINATION_CATEGORIES
export type TravelDestinationCategory = TravelDestinationCategoryTuple[number]
