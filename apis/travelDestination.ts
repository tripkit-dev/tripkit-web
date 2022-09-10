import axios from 'axios'

interface GetRequest {
  page?: number
  size?: number
}

export const travelDestinationApi = {
  get: ({ page = 1, size = 10 }: GetRequest = {}) =>
    axios.get('/api/models/travel_destinations', {
      params: { page, size }
    })
}
