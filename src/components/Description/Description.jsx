import React from 'react'
import Button from '../Button/Button'
import Category from '../Category/Category'
import Title from '../Title/Title'
import Text from '../Text/Text'
import Price from '../Price/Price'
import { DescBox } from './Description.styled'

const Description = ({product}) => {
  return (
      <DescBox>
          <Category category={product.category} />
          <Title title={product.title} />
          <Text desc={product.desc} />
          <Price oldPrice={product.oldPrice} newPrice={product.newPrice} />
          <Button/>
    </DescBox>
  )
}

export default Description