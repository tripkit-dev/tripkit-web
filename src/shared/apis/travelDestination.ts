import { travelDestinationModels } from '@shared/models/travelDestination'

interface GetRequest {
  page?: number
  size?: number
}

export const travelDestinationApi = {
  get: ({ page = 1, size = 12 }: GetRequest = {}) => {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          data: {
            page,
            size,
            totalElements: travelDestinationModels.length,
            totalPages: Math.ceil(travelDestinationModels.length / size),
            contents: travelDestinationModels.slice(
              (page - 1) * size,
              page * size
            )
          }
        })
      }, 200)
    })
  }
}
