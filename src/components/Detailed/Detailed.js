import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import axios from 'axios';
import './Detailed.css';

class Detailed extends Component{
  constructor(props){
    super(props);

    this.state={
      product: [],
      open: false
    }
    this.removeCart= this.removeCart.bind(this);
  }

  componentDidMount(){
    axios.get(`/api/details/${this.props.match.params.id}`).then(response=> {
      this.setState({ product: response.data })
    });
    console.log('Detailed: ', this.props.user);
  }

  addCart(product){
    var user= this.props.user;
    if(product && user){
      axios.post('/cart', { user: user, product_name: product.name, product_price: product.price });
    }
  }

  removeCart(product){
    //axios.delete maybe... but the problem is we need to be able to identify individual products
    //I THINK that once an item is removed, Cart will re-render and the new total will be displayed.
  }

  render(){
      var product= this.state.product[0];
      return(
        <div className='detailed-main-container'>
          <Navbar />
          <h1>{product && product.name} ({product && product.bottle_size})</h1>

          <div className='detailed-info'>
            <h2>${product && product.price}</h2>
          </div>

          <img className='detailed-pic' src= {product && product.img_url} alt='product-pic'/>
          <h3>pH: {product && product.ph}</h3>
          <p className='detailed-desc'>{product && product.description}</p>

          <div className='detailed-btns'>
            <Link to='/products'>
            <RaisedButton className='btn' label="Back" />
            </Link>
            <RaisedButton className='btn' label="Add to Cart" onClick={()=> { this.addCart(product); alert('Item added to cart!') }} />
          </div>
        </div>
      )
    }
  }

function mapStateToProps(state){
  const { logged, user }= state;
  return{
    user,
    logged
  };
}

export default connect(mapStateToProps)(Detailed);
