// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getMintedMoment } from '../../services/nbatopshot'

export default async (req, res) => {
  const { query } = req
  const { momentId } = query
  console.log('Fetching details for moment id', momentId)
  const momentDetails = await getMintedMoment(momentId)
  res.status(200).json(momentDetails)
}
