import { HotPlace } from 'types/HotPlace'

import axios from 'axios'

export const hotPlaceApi = {
  get: (size?: number) =>
    axios.get<HotPlace[]>('http://localhost:3000/api/models/hot_places', {
      params: size
    })
}
