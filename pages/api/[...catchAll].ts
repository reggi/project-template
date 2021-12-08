import { NextApiRequest, NextApiResponse } from 'next'

import { Backend } from '../../api/main'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  return await new Promise((resolve) => {
    Backend.getListener().then((listener) => {
      listener(req, res)
      res.on('finish', resolve)
    })
  })
}
