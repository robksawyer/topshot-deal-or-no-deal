/**
 * @file GamePiece.js
 */
import * as React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

import styles from './GamePiece.module.css'

import Spinner from '../Spinner'

import { useStore } from '../../hooks/useStore'

const GamePiece = (props) => {
  const {
    tagName: Tag = 'button',
    className = 'flex justify-center items-center focus:shadow-none focus:outline-none',
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

  console.log('stats', stats)
  const { playerName, playCategory, teamAtMoment, dateOfMoment } = stats
  const { min, max } = priceRange
  return (
    <Tag
      className={`${styles.game_piece} ${
        styles[`game_piece__${variant}`]
      } ${className}`}
      rel="noreferer"
      onClick={(e) => {
        setSelected(id)
        // Navigate to moment
        // window.open(momentUrl, '_blank')
      }}
      style={{
        width: '320px',
        height: '320px',
      }}
    >
      {selected.indexOf(id) > -1 ? (
        <div className="absolute flex flex-col justify-center items-center">
          <Image
            src={images[0].url}
            alt="Moment preview"
            width={320}
            height={320}
          />
          <p className="absolute text-3xl font-bold text-white right-0 top-0 bg-black bg-opacity-50 p-4">
            ${parseFloat(min).toFixed(2)}
          </p>
          <a
            href={momentUrl}
            target="_blank"
            rel="noreferrer"
            title="See moment on NBA Top Shot"
            className="absolute bottom-0 pb-6 text-white opacity-100 text-center hover:text-extrude-sm transition duration-500 ease-in-out uppercase text-shadow-lg"
          >
            <p className="text-xl font-bold leading-7">{playerName}</p>
            <p className="text-sm leading-none">{teamAtMoment}</p>
            <p className="text-sm">{playCategory}</p>
          </a>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center border-2 border-black hover:border-blue-500">
          <Image src={coverUrl} alt="Hide image" width={320} height={320} />
          <div className="text-3xl font-bold bg-opacity-50 bg-black rounded-full w-16 h-16 text-white absolute flex justify-center items-center">
            {id + 1}
          </div>
        </div>
      )}
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
