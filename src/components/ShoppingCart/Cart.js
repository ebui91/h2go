import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { connect } from 'react-redux';
import { TransitionMotion, spring } from 'react-motion';
import Card from 'material-ui/Card';
import swal from 'sweetalert2';
import Checkout from '../Checkout/Checkout';
import axios from 'axios';
import './Cart.css';

// SweetAlert for removing items. Goes in the ()=> for the X img.

class Cart extends Component{
  constructor(props){
    super(props);

    this.state= {
      cartList: [],
      total: 0,
      selectedItem: 0,
      open: false
    }
    this.removeItem= this.removeItem.bind(this);
    this.handleOpen= this.handleOpen.bind(this);
    this.handleClose= this.handleClose.bind(this);
    this.clearCart= this.clearCart.bind(this);
  }

  handleOpen= ()=>{
    this.setState({ open: true });
  };

  handleClose= ()=>{
    this.setState({ open: false });
  };

  removeItem(item){
    axios.delete(`/cart/${item.id}`).then(response=> {
      this.setState({ cartList: response.data });
    })
    axios.get(`/cart/total/${this.props.user.id}`).then(response=> {
      this.setState({ total: response.data[0].sum });
    });
  }

  clearCart(){
    axios.delete(`/checkout/${this.props.user.id}`).then(cart=> {
      this.setState({ cartList: cart.data });
    });
    axios.get(`/cart/total/${this.props.user.id}`).then(response=> {
      this.setState({ total: response.data[0].sum });
    });
  }

  componentWillMount(){
    axios.get(`/cart/${this.props.user.id}`).then(response=> {
      this.setState({ cartList: response.data });
    });
    axios.get(`/cart/total/${this.props.user.id}`).then(response=> {
      this.setState({ total: response.data[0].sum });
    });
  }

  render(){
    const cart= this.state.cartList.map(function(item, index){
      return(
          <Card className='cart-list' key={ index }>
            <div className='cart-list-line'>
              <h3>{ item.product_name }</h3>
              <button className='remove-btn' src={ require('../../images/cancel.png') } onClick={ ()=> {
                this.removeItem(item);
                swal({
                  title: 'Item removed from cart!',
                  text: 'Psssst... yall got any more of that water?',
                  type: 'success',
                  confirmButtonText: 'Keep Shopping'
                });
                }
              }> X </button>
            </div>
            <hr className='cart-hr'/>
            <div className='cart-list-line'><p>${ item.product_price }</p></div>
          </Card>
      )
    }, this)
    return(
      <div className='cart-main-container'>
        <Navbar />
        <div className='cart-body'>
          <h1 className='heading'> My Cart </h1>
          { cart }
          <h2> Order Total: ${ this.state.total || '0.00' } </h2>

          <div className='checkout-container' onClick= { this.clearCart }>
            <Checkout
              className='checkout-btn'
              name={'H2GO'}
              description={'Thanks for Ordering!'}
              amount={ this.state.total }
            />
            <p>Payments powered by Stripe &copy;</p>
          </div>
        </div>

        <div className='sticky-footer'>
          <Footer />
        </div>
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
