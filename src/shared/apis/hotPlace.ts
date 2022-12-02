import { hotPlaceModels } from '@shared/models'

const hotPlaceApi = {
  get: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({ data: hotPlaceModels })
      }, 200)
    })
  }
}

export default hotPlaceApi
