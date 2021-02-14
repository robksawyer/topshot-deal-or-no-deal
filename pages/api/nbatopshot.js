// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
  getMintedMoment,
  getPlay,
  getUserMomentListings,
} from '../../services/nbatopshot'

export default async (req, res) => {
  const { query } = req
  const { momentId } = query
  console.log('Fetching details for moment id', momentId)

  // Get the main moment details
  const momentDetails = await getMintedMoment(momentId)
  const { data: outerData } = momentDetails

  const { getMintedMoment: moment } = outerData
  const { data } = moment
  const { play, set } = data
  const { id: setId } = set
  const { id: playId } = play

  // Handle getting the play details
  const playDetails = await getPlay(playId)
  const { data: playData } = playDetails
  const { getPlay: innerPlayData } = playData

  // Handle getting the listing details
  // This allows us to get the lowest ask for the card
  const listingDetails = await getUserMomentListings(playId, setId)
  const { data: listingData } = listingDetails
  const { getUserMomentListings: innerListingData } = listingData
  const { data: fListingData } = innerListingData

  res.status(200).json({
    playData: innerPlayData,
    listingData: fListingData,
  })
}
