/**
 * @file GameListPiece.js
 */
import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

import styles from './GameListPiece.module.css'
import Spinner from '../Spinner'
import { useStore } from '../../hooks/useStore'

const GameListPiece = (props) => {
  const {
    tagName: Tag = 'button',
    className = 'flex justify-center items-start focus:shadow-none  px-10 focus:outline-none ',
    variant = 'default',
    children = '',
    item = {
      id: 0,
      coverUrl: '/img/bart-head.jpg',
      momentUrl:
        'https://www.nbatopshot.com/moment/robksawyer+3f167cba-22a4-4254-8eb9-97016254aef9',
      assets: {
        videos: [
          {
            type: 'PLAY_VIDEO_TYPE_VERTICAL',
            url:
              'https://storage.googleapis.com/assets-nbatopshot/plays/doncic_l_assist_dalvhou_verdap_jan_04_2021_vertical_9x16.mp4',
            videoLength: 17067,
          },
          {
            type: 'PLAY_VIDEO_TYPE_SQUARE',
            url:
              'https://storage.googleapis.com/assets-nbatopshot/plays/doncic_l_assist_dalvhou_verdap_jan_04_2021_square_9x16.mp4',
            videoLength: 7061,
          },
        ],
        images: [
          {
            type: 'PLAY_IMAGE_TYPE_PLAYER',
            url:
              'https://storage.googleapis.com/assets-nbatopshot/players/00516-GettyImages-1230427406_cropped.jpg',
          },
        ],
      },
    },
  } = props

  const { setSelected, selected } = useStore()
  const ref = useRef()

  const {
    coverUrl,
    momentUrl,
    id,
    assets,
    circulationCount,
    momentListingCount,
    play,
    priceRange,
    set,
  } = item
  const { stats } = play
  const { flowName } = set
  const { images, videos } = assets

  const { playerName, playCategory, teamAtMoment, dateOfMoment } = stats
  const { min, max } = priceRange

  console.log('ref.current', ref.current)
  return (
    <Tag
      className={`${styles.game_piece} ${
        styles[`game_piece__${variant}`]
      } ${className}`}
      rel="noreferer"
      style={{
        width: '150px',
        height: '100px',
      }}
    >
      {/* selected.indexOf(id) */}
      <div
        className="absolute flex flex-row justify-items-start  items-start  object-contain"
        style={{
          width: '200px',
          height: '50px',
        }}
      >
        <Image
          src={images[0].url}
          alt="Moment preview"
          width={75}
          height={75}
        />
        <div className="text-sm font-normal text-white text-left right-0 top-0 bg-black bg-opacity-40 p-0">
          ${parseFloat(min).toFixed(2)}
          <p className="text-sm font-bold leading-7">{playerName}</p>
          <p className="text-sm leading-none">{teamAtMoment}</p>
          <p className="text-sm">{playCategory}</p>
        </div>
      </div>
    </Tag>
  )
}

GameListPiece.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
}

export default GameListPiece
