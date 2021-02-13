/**
 * @file Footer.js
 */
import * as React from 'react'
import PropTypes from 'prop-types'

import styles from './Footer.module.css'

const Footer = (props) => {
  const {
    tagName: Tag = 'footer',
    className = 'w-auto flex justify-center items-center',
    variant = 'default',
    children = '',
  } = props

  return (
    <Tag
      className={`${styles.footer} ${
        styles[`footer__${variant}`]
      } ${className}`}
    >
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <img src="/vercel.svg" alt="Vercel Logo" className="w-24 h-auto py-4" />
      </a>
    </Tag>
  )
}

Footer.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
}

export default Footer
