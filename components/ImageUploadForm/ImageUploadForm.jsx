/**
 * @file ImageUploadForm.js
 */
import * as React from 'react'
import PropTypes from 'prop-types'

import styles from './ImageUploadForm.module.css'

import { useStore } from '../.../hooks/useStore'

const ImageUploadForm = (props) => {
  const {
    tagName: Tag = 'div',
    className = '',
    variant = 'default',
    children = '',
  } = props

  const { images, setImages, setUploading, uploading } = useStore()

  /**
   * onChange
   * @param {*} e
   */
  const onChange = (e) => {
    const files = Array.from(e.target.files)
    setUploading(true)

    const formData = new FormData()

    files.forEach((file, i) => {
      formData.append(i, file)
    })

    // Let's just save the image locally somehow?
    // fetch(`${API_URL}/image-upload`, {
    //   method: 'POST',
    //   body: formData
    // })
    // .then(res => res.json())
    // .then(images => {
    //   this.setState({
    //     uploading: false,
    //     images
    //   })
    // })
  }

  /**
   * removeImage
   * @param {*} id
   */
  const removeImage = (id) => {
    this.setState({
      images: this.state.images.filter((image) => image.public_id !== id),
    })
  }

  const content = () => {
    switch (true) {
      case uploading:
        return <Spinner />
      case images.length > 0:
        return <Images images={images} removeImage={removeImage} />
      default:
        return <Buttons onChange={onChange} />
    }
  }

  return (
    <Tag
      className={`${styles.image_upload_form} ${
        styles[`image_upload_form__${variant}`]
      } ${className}`}
    >
      <p className="text-md text-center">
        Select an image to hide your prizes.
      </p>
      {content()}
    </Tag>
  )
}

ImageUploadForm.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
}

export default ImageUploadForm
