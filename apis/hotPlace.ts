import { HotPlace } from 'types/HotPlace'

import axios from 'axios'

export const hotPlaceApi = {
  get: (size?: number) =>
    axios.get<HotPlace[]>('/api/models/hot_places', {
      params: size
    })
}
