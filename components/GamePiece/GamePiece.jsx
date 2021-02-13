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
    className = '',
    variant = 'default',
    children = '',
    item = {
      imageUrl: '/img/bart-head.jpg',
      momentUrl:
        'https://www.nbatopshot.com/moment/robksawyer+3f167cba-22a4-4254-8eb9-97016254aef9',
    },
  } = props

  const { imageUrl, momentUrl } = item
  return (
    <Tag
      className={`${styles.game_piece} ${
        styles[`game_piece__${variant}`]
      } ${className}`}
      href={momentUrl}
      target="_blank"
      rel="noreferer"
    >
      <Image
        loader={<Spinner />}
        src={imageUrl}
        alt="Hide image"
        width={320}
        height={320}
      />
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
