/**
 * @file Spinner.js
 */
import * as React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlingBall } from '@fortawesome/free-solid-svg-icons'

import styles from './Spinner.module.css'

const Spinner = (props) => {
  const {
    tagName: Tag = 'div',
    className = 'spinner fadein w-screen flex justify-center items-center py-24',
    variant = 'default',
    children = '',
  } = props

  return (
    <Tag
      className={`${styles.spinner} ${
        styles[`spinner__${variant}`]
      } ${className}`}
    >
      <FontAwesomeIcon
        icon={faBowlingBall}
        size="5x"
        color="#3B5998"
        className="w-12 h-12 animate-spin"
      />
    </Tag>
  )
}

Spinner.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
}

export default Spinner
