import React from 'react'


const Photo = () => {
  return (
    <>
      <picture>
        <source srcSet='../../assets/images/image-product-desktop.jpg' media="(min-width: 768px)" />
        <img src='../../assets/images/image-product-mobile.jpg'/>
      </picture>
    </>
  )
}

export default Photo