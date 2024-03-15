import React from 'react'
import Photo from '../Photo/Photo'
import Description from '../Description/Description'
import { ProductCardBox } from './ProductCard.styled'

const ProductCard = ({product}) => {
  return (
      <ProductCardBox className='container'>
          <Photo image={product.image} />
          <Description product={product}/>
    </ProductCardBox>
  )
}

export default ProductCard