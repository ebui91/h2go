import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import './Cart.css';

class Cart extends Component{
  render(){
    return(
      <div className='cart-main-container'>
        <Navbar />
        <h1>Shopping Cart Page</h1>
      </div>
    )
  }
}

export default Cart;
