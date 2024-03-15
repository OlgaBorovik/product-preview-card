import React from 'react'
import imageDesktop from '../../assets/image-product-desktop.jpg'




const Photo = ({image}) => {
  return (
    <>
      <picture>
        <source srcSet={imageDesktop} media="(min-width: 768px)" />
        <img src={image} alt="product photo" width='343'/>
      </picture>
      
      </>
  )
}

export default Photo