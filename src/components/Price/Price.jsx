import React from 'react'
import { PriceBox, OldPriceP, NewPriceP } from './Price.styled'


const Price = ({oldPrice, newPrice}) => {
  return (
    < PriceBox>
          <NewPriceP>${newPrice}</NewPriceP>
          <OldPriceP>${oldPrice}</OldPriceP>
          
    </ PriceBox>
  )
}

export default Price