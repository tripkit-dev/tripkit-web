import type { NextApiRequest, NextApiResponse } from 'next'

import { hotPlaceModels } from '@shared/models'
import { HotPlace } from '@shared/types'
import { Method } from '@shared/types'

export default function hot_places(
  req: NextApiRequest,
  res: NextApiResponse<HotPlace[]>
) {
  return handler[req.method! as Method](req, res)
}

const handler = {
  get: (req: NextApiRequest, res: NextApiResponse<HotPlace[]>) => {
    const size = Number(req.query.size)

    if (Number.isInteger(size)) {
      res.status(200).json(hotPlaceModels.slice(0, size))
    }

    res.status(200).json(hotPlaceModels)
  }
}
