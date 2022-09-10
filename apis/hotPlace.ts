import axios from 'axios'

export const hotPlaceApi = {
  get: () => axios.get('http://localhost:3000/api/models/hot_places')
}
