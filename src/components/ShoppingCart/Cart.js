import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import { connect } from 'react-redux';
import Card from 'material-ui/Card';
import axios from 'axios';
import './Cart.css';

class Cart extends Component{
  constructor(){
    super();

    this.state= {
      cartList: [],
      total: 0
    }

  }

  componentWillMount(){
    axios.get(`/cart/${this.props.user.id}`).then(response=> {
      this.setState({ cartList: response.data });
    });
    axios.get(`/cart/total/${this.props.user.id}`).then(response=> {
      this.setState({ total: response.data[0].sum });
      // console.log('response: ', response.data);
    })
    console.log(this.state.total);
  }

  render(){
    // console.log('render: ', this.state.cartList);
    const cart= this.state.cartList.map(function(item, index){
      return(
        <Card className='cart-list' key={index}>
          <div className='cart-list-line'>
            <h3>{item.product_name}</h3>
            <img className='remove-icon' src={require('../../images/cancel.png')} alt='X' />
          </div>
          <div className='cart-list-line'><p>${item.product_price}</p></div>
        </Card>
      )
    })
    return(
      <div className='cart-main-container'>
        <Navbar />
        <h1> Shopping Cart Page </h1>
        { cart }
        <h2> Order Total: ${ this.state.total } </h2>
      </div>
    )
  }
}

function mapStateToProps(state){
  const { user }= state;
  return{
    user
  }
}

export default connect(mapStateToProps)(Cart);
