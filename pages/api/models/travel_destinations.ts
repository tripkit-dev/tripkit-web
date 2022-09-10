import type { NextApiRequest, NextApiResponse } from 'next'

import { Method } from '@enums/Http'

import { TravelDestination } from 'types/TravelDestination'

import { travelDestinationModels } from 'models/travelDestination'

export default function hot_places(
  req: NextApiRequest,
  res: NextApiResponse<TravelDestination[]>
) {
  return handler[req.method! as Method](req, res)
}

const handler = {
  [Method.GET]: (
    req: NextApiRequest,
    res: NextApiResponse<TravelDestination[]>
  ) => {
    res.status(200).json(travelDestinationModels)
  }
}
