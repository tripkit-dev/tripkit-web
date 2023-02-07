import { hotPlaceModels } from '@shared/models'

const hotPlaceApi = {
  get: () => {
    return new Promise((res) => {
      const random = hotPlaceModels.map((hp) => ({
        ...hp,
        random: Math.random()
      }))

      setTimeout(() => {
        res({ data: random.sort((p, c) => p.random - c.random) })
      }, 200)
    })
  }
}

export default hotPlaceApi
