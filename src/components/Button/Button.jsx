import React from 'react'
import { Btn } from './Button.styled'
import cart from '../../assets/icon-cart.svg'

const Button = () => {
  return (
    <Btn type="button">
      <img src={cart} height="16" style={{marginRight: 8}} />
      Add to Cart</Btn>
  )
}

export default Button