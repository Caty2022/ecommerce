import React from 'react'
import cart from '../images/cart.svg'

const CartWidget = () => {
  return (
    <div>
      <span>0</span>
      <img src={cart} alt="cart" width={20}></img>
    </div>
  );
}

export default CartWidget