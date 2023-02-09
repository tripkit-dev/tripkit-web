import { atom } from 'recoil'

import { HotPlace } from '@shared/types'

export const selectedPlacesState = atom<HotPlace[]>({
  key: 'selectedPlacesState',
  default: []
})
