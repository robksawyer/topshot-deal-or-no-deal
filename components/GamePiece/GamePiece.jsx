/**
 * @file GamePiece.js
 */
import * as React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

import styles from './GamePiece.module.css'

import Spinner from '../Spinner'

const GamePiece = (props) => {
  const {
    tagName: Tag = 'a',
    className = 'flex justify-center items-center',
    variant = 'default',
    children = '',
    item = {
      coverUrl: '/img/bart-head.jpg',
      momentUrl:
        'https://www.nbatopshot.com/moment/robksawyer+3f167cba-22a4-4254-8eb9-97016254aef9',
    },
  } = props

  const { coverUrl, momentUrl, id } = item
  return (
    <Tag
      className={`${styles.game_piece} ${
        styles[`game_piece__${variant}`]
      } ${className}`}
      href={momentUrl}
      target="_blank"
      rel="noreferer"
    >
      <Image src={coverUrl} alt="Hide image" width={320} height={320} />
      <div className="text-3xl font-bold bg-opacity-50 bg-black rounded-full w-16 h-16 text-white absolute flex justify-center items-center">
        {id}
      </div>
    </Tag>
  )
}

GamePiece.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
}

export default GamePiece
