import { atom } from 'recoil'

import { hotPlaceModels } from '@shared/models'
import { HotPlace } from '@shared/types'

export const selectedPlacesState = atom<HotPlace[]>({
  key: 'selectedPlacesState',
  // default: [],
  default: hotPlaceModels
})
