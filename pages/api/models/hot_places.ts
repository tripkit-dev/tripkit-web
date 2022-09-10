import type { NextApiRequest, NextApiResponse } from 'next'

import { Method } from '@enums/Http'

import { HotPlace } from 'types/HotPlace'

import { hotPlaceModels } from 'models/hotPlace'

export default function hot_places(
  req: NextApiRequest,
  res: NextApiResponse<HotPlace[]>
) {
  return handler[req.method! as Method](req, res)
}

const handler = {
  [Method.GET]: (req: NextApiRequest, res: NextApiResponse<HotPlace[]>) => {
    res.status(200).json(hotPlaceModels)
  }
}
