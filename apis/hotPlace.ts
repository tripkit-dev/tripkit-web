import { hotPlaceModels } from 'models/hotPlace'

export const hotPlaceApi = {
  get: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({ data: hotPlaceModels })
      }, 200)
    })
  }
}
