/**
 * @file nbatopshot.js
 */

import fetch from 'isomorphic-fetch'

// https://api.nba.dapperlabs.com/marketplace/graphql?GetMintedMoment
// https://api.nba.dapperlabs.com/marketplace/graphql?SearchMomentListingsDefault
// https://api.nba.dapperlabs.com/marketplace/graphql?SearchMarketplaceTransactions
// https://api.nba.dapperlabs.com/marketplace/graphql?CurrentUserDetails
// https://api.nba.dapperlabs.com/marketplace/graphql?GetMyProfile
// https://api.nba.dapperlabs.com/marketplace/graphql?GetUnreadNotifications

const ENDPOINT = 'https://api.nba.dapperlabs.com/marketplace/graphql'

/**
 * getMintedMoment
 * @param {string} momentId e.g. 0028ac11-9dd3-48a1-868d-e79ff23c431f
 */
export const getMintedMoment = (momentId) =>
  fetch(`${ENDPOINT}?GetMintedMoment`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      operationName: 'GetMintedMoment',
      query: `query GetMintedMoment($momentId: ID!) {
        getMintedMoment(momentId: $momentId) {
          data {
            ...MomentDetails
            play {
              ... on Play {
                ...PlayDetails
              }
            }
          }
        }
      }
      
      fragment MomentDetails on MintedMoment {
        id
        version
        sortID
        set {
          id
          flowName
          flowSeriesNumber
          setVisualId
        }
        setPlay {
          ID
          flowRetired
          circulationCount
        }
        assetPathPrefix
        play {
          id
          stats {
            playerID
            playerName
            primaryPosition
            teamAtMomentNbaId
            teamAtMoment
            dateOfMoment
            playCategory
          }
        }
        price
        listingOrderID
        flowId
        owner {
          dapperID
          username
          profileImageUrl
        }
        flowSerialNumber
        forSale
      }
      
      fragment PlayDetails on Play {
        id
        description
        stats {
          playerID
          playerName
          primaryPosition
          currentTeamId
          dateOfMoment
          jerseyNumber
          awayTeamName
          awayTeamScore
          teamAtMoment
          homeTeamName
          homeTeamScore
          totalYearsExperience
          teamAtMomentNbaId
          height
          weight
          currentTeam
          birthplace
          birthdate
          awayTeamNbaId
          draftYear
          nbaSeason
          draftRound
          draftSelection
          homeTeamNbaId
          draftTeam
          draftTeamNbaId
          playCategory
          homeTeamScoresByQuarter {
            quarterScores {
              type
              number
              sequence
              points
            }
          }
          awayTeamScoresByQuarter {
            quarterScores {
              type
              number
              sequence
              points
            }
          }
        }
        statsPlayerGameScores {
          blocks
          points
          steals
          assists
          minutes
          rebounds
          turnovers
          plusMinus
          flagrantFouls
          personalFouls
          playerPosition
          technicalFouls
          twoPointsMade
          blockedAttempts
          fieldGoalsMade
          freeThrowsMade
          threePointsMade
          defensiveRebounds
          offensiveRebounds
          pointsOffTurnovers
          twoPointsAttempted
          assistTurnoverRatio
          fieldGoalsAttempted
          freeThrowsAttempted
          twoPointsPercentage
          fieldGoalsPercentage
          freeThrowsPercentage
          threePointsAttempted
          threePointsPercentage
        }
        statsPlayerSeasonAverageScores {
          minutes
          blocks
          points
          steals
          assists
          rebounds
          turnovers
          plusMinus
          flagrantFouls
          personalFouls
          technicalFouls
          twoPointsMade
          blockedAttempts
          fieldGoalsMade
          freeThrowsMade
          threePointsMade
          defensiveRebounds
          offensiveRebounds
          pointsOffTurnovers
          twoPointsAttempted
          assistTurnoverRatio
          fieldGoalsAttempted
          freeThrowsAttempted
          twoPointsPercentage
          fieldGoalsPercentage
          freeThrowsPercentage
          threePointsAttempted
          threePointsPercentage
        }
      }
      `,
      variables: {
        momentId,
      },
    }),
  })
    .then((r) => r.json())
    .then((data) => data)
    .catch((err) => err)
