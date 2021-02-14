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
/**
 Example data:
{
    id: '3f167cba-22a4-4254-8eb9-97016254aef9',
    version: '1',
    sortID: '',
    set: {
        id: 'ad8e85a4-2240-4604-95f6-be826966d988',
        flowName: 'Cool Cats',
        flowSeriesNumber: 2,
        setVisualId: 'SET_VISUAL_COMMON'
    },
    setPlay: {
        ID: '1071b306-fa0b-48f3-8701-829c0ac5938c',
        flowRetired: false,
        circulationCount: 3461
    },
    assetPathPrefix: 'https://assets.nbatopshot.com/editions/2_cool_cats_common/00ce687f-6c1f-4aef-956a-6e9418680b2d/play_00ce687f-6c1f-4aef-956a-6e9418680b2d_2_cool_cats_common_capture_',
    play: {
        id: '00ce687f-6c1f-4aef-956a-6e9418680b2d',
        stats: [Object],
        description: 'You could write a textbook about how Luka Doncic uses angles and momentum to manipulate the defense. The 21-year-old rocks world-class Houston Rockets defender P.J. Tucker onto his heels before claiming his space in the paint and dishing off to Willie Cauley-Stein for an alley-oop.',
        statsPlayerGameScores: [Object],
        statsPlayerSeasonAverageScores: [Object]
    },
    price: null,
    listingOrderID: '',
    flowId: '2701320',
    owner: {
        dapperID: 'google-oauth2|106597977111606407035',
        username: 'robksawyer',
        profileImageUrl: 'https://storage.googleapis.com/dapper-profile-icons/avatar-abstract-2.png'
    },
    flowSerialNumber: '745',
    forSale: false
}
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

/**
 * getPlay
 * @param {string} playId e.g. 00ce687f-6c1f-4aef-956a-6e9418680b2d
 */
/**
 Example data:
{
  "data": {
    "getPlay": {
      "play": {
        "assets": {
          "videos": [
            {
              "type": "PLAY_VIDEO_TYPE_VERTICAL",
              "url": "https://storage.googleapis.com/assets-nbatopshot/plays/doncic_l_assist_dalvhou_verdap_jan_04_2021_vertical_9x16.mp4",
              "videoLength": 17067
            },
            {
              "type": "PLAY_VIDEO_TYPE_SQUARE",
              "url": "https://storage.googleapis.com/assets-nbatopshot/plays/doncic_l_assist_dalvhou_verdap_jan_04_2021_square_9x16.mp4",
              "videoLength": 7061
            }
          ],
          "images": [
            {
              "type": "PLAY_IMAGE_TYPE_PLAYER",
              "url": "https://storage.googleapis.com/assets-nbatopshot/players/00516-GettyImages-1230427406_cropped.jpg"
            }
          ]
        },
        "description": "You could write a textbook about how Luka Doncic uses angles and momentum to manipulate the defense. The 21-year-old rocks world-class Houston Rockets defender P.J. Tucker onto his heels before claiming his space in the paint and dishing off to Willie Cauley-Stein for an alley-oop.",
        "id": "00ce687f-6c1f-4aef-956a-6e9418680b2d"
      }
    }
  }
}
*/
export const getPlay = (playId) =>
  fetch(`${ENDPOINT}?GetPlayResponse`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      operationName: 'GetPlayResponse',
      query: `query GetPlayResponse($input: GetPlayInput!) {
        getPlay(playID: $input) {
          play {
            assets {
              videos {
                type
                url
                videoLength
              }
              images {
                type
                url
              }
            }
            description
            id
          }
        }
      }
      `,
      variables: {
        input: {
          playID: playId,
        },
      },
    }),
  })
    .then((r) => r.json())
    .then((data) => data)
    .catch((err) => err)

/**
 * getUserMomentListings
 * @param {string} playId
 * @param {string} setId
 */
/**
Example response:
{
  "data": {
    "getUserMomentListings": {
      "data": {
        "version": null,
        "circulationCount": 4000,
        "flowRetired": true,
        "set": {
          "id": "208ae30a-a4fe-42d4-9e51-e6fd1ad2a7a9",
          "flowName": "Base Set",
          "setVisualId": "SET_VISUAL_COMMON",
          "flowSeriesNumber": 2,
          "__typename": "Set"
        },
        "play": {
          "description": "Taking it to the rack! Late in first quarter play, Philadelphia 76ers rookie point guard Tyrese Maxey glides to the rim and hits the layup off the glass for the first two points of his NBA career against the Washington Wizards on December 23, 2020.",
          "id": "6d0f4982-015d-4e5c-8e46-0e8a8f9949ac",
          "stats": {
            "playerName": "Tyrese Maxey",
            "dateOfMoment": "2020-12-24T00:00:00Z",
            "playCategory": "Layup",
            "teamAtMomentNbaId": "1610612755",
            "teamAtMoment": "Philadelphia 76ers",
            "__typename": "PlayStats"
          },
          "__typename": "Play"
        },
        "assetPathPrefix": "https://assets.nbatopshot.com/editions/2_base_set_common/6d0f4982-015d-4e5c-8e46-0e8a8f9949ac/play_6d0f4982-015d-4e5c-8e46-0e8a8f9949ac_2_base_set_common_capture_",
        "priceRange": {
          "min": "100.00000000",
          "max": "75000.00000000",
          "__typename": "PriceRange"
        },
        "momentListingCount": 266,
        "__typename": "UserMomentListings"
      },
      "__typename": "UserMomentListingsResponse"
    }
 */
export const getUserMomentListings = (playId, setId) =>
  fetch(`${ENDPOINT}?GetPlayResponse`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      operationName: 'GetUserMomentListingsDefault',
      query: `
        query GetUserMomentListingsDefault($input: GetUserMomentListingsInput!) {
            getUserMomentListings(input: $input) {
            data {
                version
                circulationCount
                flowRetired
                set {
                id
                flowName
                setVisualId
                flowSeriesNumber
                __typename
                }
                play {
                description
                id
                stats {
                    playerName
                    dateOfMoment
                    playCategory
                    teamAtMomentNbaId
                    teamAtMoment
                    __typename
                }
                __typename
                }
                assetPathPrefix
                priceRange {
                min
                max
                __typename
                }
                momentListingCount
                __typename
            }
            __typename
            }
        }      
      `,
      variables: {
        input: {
          playID: playId,
          setID: setId,
        },
      },
    }),
  })
    .then((r) => r.json())
    .then((data) => data)
    .catch((err) => err)
