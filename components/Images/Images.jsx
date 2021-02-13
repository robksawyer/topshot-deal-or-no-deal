/**
 * @file Images.js
 */
import * as React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages, faImage } from '@fortawesome/free-solid-svg-icons'

import styles from './Images.module.css'

const Images = (props) => {
  const {
    tagName: Tag = 'div',
    className = 'buttons fadein',
    variant = 'default',
    children = '',
    onChange = (e) => console.log('onChange fired.'),
  } = props

  return (
    <Tag
      className={`${styles.images} ${
        styles[`images__${variant}`]
      } ${className}`}
    >
      <div className="button">
        <label htmlFor="single">
          <FontAwesomeIcon icon={faImage} color="#3B5998" size="10x" />
        </label>
        <input type="file" id="single" onChange={onChange} />
      </div>

      <div className="button">
        <label htmlFor="multi">
          <FontAwesomeIcon icon={faImages} color="#6d84b4" size="10x" />
        </label>
        <input type="file" id="multi" onChange={onChange} multiple />
      </div>
    </Tag>
  )
}

Images.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
}

export default Images