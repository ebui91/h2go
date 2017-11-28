import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import Card from 'material-ui/Card';
import Checkout from '../Checkout/Checkout';
import axios from 'axios';
import './Cart.css';

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
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  removeItem(item){
    axios.delete(`/cart/${item.id}`).then(response=> {
      this.setState({ cartList: response.data });
      console.log(response);
    })
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
        <Card className='cart-list' key={index}>
          <div className='cart-list-line'>
            <h3>{item.product_name}</h3>
            <img className='remove-icon' src={require('../../images/cancel.png')} alt='X' onClick={ ()=> {
              this.removeItem(item);
              alert('Item removed from cart!');
              }
            }/>
          </div>
          <div className='cart-list-line'><p>${item.product_price}</p></div>
        </Card>
      )
    }, this)
    return(
      <div className='cart-main-container'>
        <Navbar />
        <h1> My Cart </h1>
        { cart }
        <h2> Order Total: ${ this.state.total } </h2>

        <div className='checkout-container'>
          <Checkout
            className='checkout-btn'
            name={'H2GO'}
            description={'Thanks for Ordering!'}
            amount={1}
          />
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
