// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getMintedMoment } from '../../services/nbatopshot'

export default async (req, res, query) => {
  console.log('query', query)
  // const momentDetails = await getMintedMoment()
  res.status(200).json({ name: 'John Doe' })
}
