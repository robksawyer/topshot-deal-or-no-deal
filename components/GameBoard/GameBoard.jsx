/**
 * @file GameBoard.js
 */
import * as React from 'react'
import PropTypes from 'prop-types'

import styles from './GameBoard.module.css'

import GamePiece from '../GamePiece'

/**
 * shuffle
 * @see https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 * @param {*} array
 */
const shuffle = (array) => {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

const GameBoard = (props) => {
  const {
    tagName: Tag = 'div',
    className = 'flex flex-col justify-center items-center w-auto h-auto py-24',
    variant = 'default',
    children = '',
    items = [
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
    ],
  } = props

  // Randomly sort the items
  const shuffledItems = shuffle(items)

  console.log('shuffledItems', shuffledItems)

  // Get the top row of items
  const topRow = shuffledItems.slice(0, 4)

  // Get the bottom row of items
  const bottomRow = shuffledItems.slice(4, shuffledItems.length)

  return (
    <Tag
      className={`${styles.game_board} ${
        styles[`game_board__${variant}`]
      } ${className}`}
    >
      <div className="mb-4 grid gap-4 grid-cols-4 overflow-hidden">
        {topRow.map((item, i) => (
          <GamePiece key={`tr-${i}`} item={item} />
        ))}
      </div>
      <div className="grid gap-4 grid-cols-3 w-auto overflow-hidden">
        {bottomRow.map((item, j) => (
          <GamePiece key={`br-${j}`} item={item} />
        ))}
      </div>
    </Tag>
  )
}

GameBoard.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
}

export default GameBoard
