import type { NextApiRequest, NextApiResponse } from 'next'

import { travelDestinationModels } from '@shared/models'
import { Method } from '@shared/types'
import { Pagination } from '@shared/types'
import { TravelDestination } from '@shared/types'

export default function hot_places(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  return handler[req.method as Method](req, res)
}

const handler = {
  get: (req: NextApiRequest, res: NextApiResponse<Response>) => {
    const page = Number(req.query.page)
    const size = Number(req.query.size)

    if (Number.isInteger(page) && Number.isInteger(size)) {
      res.status(200).json({
        page,
        size,
        totalElements: travelDestinationModels.length,
        totalPages: Math.ceil(travelDestinationModels.length / size),
        contents: travelDestinationModels.slice((page - 1) * size, page * size)
      })
      return
    }

    res.status(200).json(travelDestinationModels)
  }
}

type Response = TravelDestination[] | Pagination<TravelDestination[]>
