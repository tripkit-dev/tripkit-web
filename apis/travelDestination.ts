import axios from 'axios'

export const travelDestinationApi = {
  get: () => axios.get('http://localhost:3000/api/models/travel_destinations')
}
