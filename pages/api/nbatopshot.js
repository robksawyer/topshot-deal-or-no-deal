// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getMintedMoment, getPlay } from '../../services/nbatopshot'

export default async (req, res) => {
  const { query } = req
  const { momentId } = query
  console.log('Fetching details for moment id', momentId)
  const momentDetails = await getMintedMoment(momentId)
  console.log('momentDetails', momentDetails)
  const { data: outerData } = momentDetails
  console.log('outerData', outerData)
  const { getMintedMoment: moment } = outerData
  const { data } = moment
  const { play } = data
  console.log('play id:', play?.id)
  const { id } = play
  const playDetails = await getPlay(id)
  const { data: playData } = playDetails
  const { getPlay: innerPlayData } = playData
  res.status(200).json(innerPlayData)
}
