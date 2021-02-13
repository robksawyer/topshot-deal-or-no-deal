import React from 'react'
import Head from 'next/head'
import GameBoard from '../components/GameBoard'

import styles from '../styles/Game.module.css'

import Footer from '../components/Footer'

export default function Game({ items }) {
  console.log('items', items)
  return (
    <div className="w-screen h-auto">
      <header className="flex w-full h-auto justify-center items-center mt-32">
        <p className="text-3xl text-center font-bold">
          NBA Top Shot: Deal or No Deal
        </p>
      </header>

      <GameBoard items={items} />

      <Footer />
    </div>
  )
}

export async function getStaticProps(context) {
  const input = [
    {
      id: 0,
      coverUrl: '/img/bart-head.jpg',
      momentUrl:
        'https://www.nbatopshot.com/moment/robksawyer+3f167cba-22a4-4254-8eb9-97016254aef9',
    },
    {
      id: 1,
      coverUrl: '/img/bart-head.jpg',
      momentUrl:
        'https://www.nbatopshot.com/moment/robksawyer+3f167cba-22a4-4254-8eb9-97016254aef9',
    },
    {
      id: 2,
      coverUrl: '/img/bart-head.jpg',
      momentUrl:
        'https://www.nbatopshot.com/moment/robksawyer+3f167cba-22a4-4254-8eb9-97016254aef9',
    },
    {
      id: 3,
      coverUrl: '/img/bart-head.jpg',
      momentUrl:
        'https://www.nbatopshot.com/moment/robksawyer+3f167cba-22a4-4254-8eb9-97016254aef9',
    },
    {
      id: 4,
      coverUrl: '/img/bart-head.jpg',
      momentUrl:
        'https://www.nbatopshot.com/moment/robksawyer+3f167cba-22a4-4254-8eb9-97016254aef9',
    },
    {
      id: 5,
      coverUrl: '/img/bart-head.jpg',
      momentUrl:
        'https://www.nbatopshot.com/moment/robksawyer+3f167cba-22a4-4254-8eb9-97016254aef9',
    },
    {
      id: 6,
      coverUrl: '/img/bart-head.jpg',
      momentUrl:
        'https://www.nbatopshot.com/moment/robksawyer+3f167cba-22a4-4254-8eb9-97016254aef9',
    },
  ]

  if (!input?.length) {
    return {
      notFound: true,
    }
  }

  const momentIds = input.map(({ momentUrl: url }) => url.split('+')[1].trim())
  console.log('Moment Ids', momentIds)

  const items = await Promise.all([
    fetch(`http://localhost:3000/api/nbatopshot?momentId=${momentIds[0]}`),
    fetch(`http://localhost:3000/api/nbatopshot?momentId=${momentIds[1]}`),
    fetch(`http://localhost:3000/api/nbatopshot?momentId=${momentIds[2]}`),
    fetch(`http://localhost:3000/api/nbatopshot?momentId=${momentIds[3]}`),
    fetch(`http://localhost:3000/api/nbatopshot?momentId=${momentIds[4]}`),
    fetch(`http://localhost:3000/api/nbatopshot?momentId=${momentIds[5]}`),
    fetch(`http://localhost:3000/api/nbatopshot?momentId=${momentIds[6]}`),
  ])
    .then((responses) => {
      // Get a JSON object from each of the responses
      return Promise.all(
        responses.map(function (response) {
          return response.json()
        })
      )
    })
    .then((results) => {
      // Log the results to the console
      // You would do something with both sets of data here
      const data = results.map(({ data }) => data?.getMintedMoment?.data)

      return input.map((item, i) => {
        const { assetPathPrefix } = data[i]
        const tItem = item
        tItem.assetPathPrefix = assetPathPrefix
        return tItem
      })
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
    })
    .catch((error) => {
      // if there's an error, log it
      console.log(error)
    })

  return {
    props: {
      items,
    }, // will be passed to the page component as props
  }
}
