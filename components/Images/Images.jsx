/**
 * @file Images.js
 */
import * as React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

import styles from './Images.module.css'

const Images = (props) => {
  const {
    tagName: Tag = 'div',
    className = '',
    variant = 'default',
    children = '',
    images = [],
    removeImage = () => console.log('Removing image...'),
  } = props

  return (
    <Tag
      className={`${styles.images} ${
        styles[`images__${variant}`]
      } ${className}`}
    >
      {images.map((image, i) => (
        <div key={i} className="fadein">
          <div onClick={() => removeImage(image.public_id)} className="delete">
            <FontAwesomeIcon icon={faTimesCircle} size="2x" />
          </div>
          <img src={image.secure_url} alt="" />
        </div>
      ))}
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
