import type { NextApiRequest, NextApiResponse } from 'next'

import { HotPlace } from 'types/HotPlace'

import { Method } from '@shared/enums/Http'
import { hotPlaceModels } from 'models/hotPlace'

export default function hot_places(
  req: NextApiRequest,
  res: NextApiResponse<HotPlace[]>
) {
  return handler[req.method! as Method](req, res)
}

const handler = {
  [Method.GET]: (req: NextApiRequest, res: NextApiResponse<HotPlace[]>) => {
    const size = Number(req.query.size)

    if (Number.isInteger(size)) {
      res.status(200).json(hotPlaceModels.slice(0, size))
    }

    res.status(200).json(hotPlaceModels)
  }
}
