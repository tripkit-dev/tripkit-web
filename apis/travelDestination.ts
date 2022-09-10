import axios from 'axios'

interface GetRequest {
  page?: number
  size?: number
}

export const travelDestinationApi = {
  get: ({ page = 1, size = 10 }: GetRequest = {}) =>
    axios.get('http://localhost:3000/api/models/travel_destinations', {
      params: { page, size }
    })
}
