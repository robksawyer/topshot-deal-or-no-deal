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
        'https://www.nbatopshot.com/moment/robksawyer+4ff2b34f-4962-47e5-8fa1-f13a74e92c33',
    },
    {
      id: 2,
      coverUrl: '/img/bart-head.jpg',
      momentUrl:
        'https://www.nbatopshot.com/moment/26707296-70e7-4fde-bc7e-5db1a3094a49',
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

  const momentIds = input.map(({ momentUrl: url }) => {
    let id = null
    const s1 = url.split('+')

    if (s1?.length > 1) {
      console.log('s1', s1)
      id = s1[1]?.trim()
    } else {
      const s2 = url.split('/')
      console.log('s2', s2)
      id = s2[s2.length - 1].trim()
    }
    console.log('id', id)
    return id
  })
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
      // console.log('results', results)
      // Log the results to the console
      // You would do something with both sets of data here
      // const data = results.map(({ data }) => data?.getMintedMoment?.data)

      return input.map((item, i) => {
        const { play } = results[i].playData
        const {
          circulationCount,
          priceRange,
          momentListingCount,
          set,
          play: playDetails,
        } = results[i].listingData
        const { assets } = play
        // const { images, videos } = assets
        // console.log('images, videos', images, videos)
        const tItem = input[i]
        tItem.assets = assets
        tItem.priceRange = priceRange
        tItem.circulationCount = circulationCount
        tItem.play = playDetails
        tItem.set = set
        tItem.momentListingCount = momentListingCount
        return tItem
      })
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
