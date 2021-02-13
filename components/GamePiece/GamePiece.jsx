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
    className = 'flex justify-center items-center focus:shadow-none focus:outline-none border-2 border-black',
    variant = 'default',
    children = '',
    item = {
      id: 0,
      coverUrl: '/img/bart-head.jpg',
      momentUrl:
        'https://www.nbatopshot.com/moment/robksawyer+3f167cba-22a4-4254-8eb9-97016254aef9',
    },
  } = props

  const { setSelected, selected } = useStore()

  const { coverUrl, momentUrl, id } = item

  console.log('selected', selected)
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
        <>
          <div className="text-3xl font-bold text-black absolute flex justify-center items-center">
            <p className="uppercase py-10">Moment here</p>
          </div>
        </>
      ) : (
        <>
          <Image src={coverUrl} alt="Hide image" width={320} height={320} />
          <div className="text-3xl font-bold bg-opacity-50 bg-black rounded-full w-16 h-16 text-white absolute flex justify-center items-center">
            {id}
          </div>
        </>
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
