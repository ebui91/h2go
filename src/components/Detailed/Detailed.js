import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import swal from 'sweetalert2';
import axios from 'axios';
import './Detailed.css';

class Detailed extends Component{
  constructor(props){
    super(props);

    this.state={
      product: [],
      open: false
    }
  }

  componentDidMount(){
    axios.get(`/api/details/${this.props.match.params.id}`).then(response=> {
      this.setState({ product: response.data })
    });
  }

  addCart(product){
    var user= this.props.user;
    if(product && user){
      console.log(this.props.user);
      axios.post('/cart', { user: user, product_name: product.name, product_price: product.price });
    }
  }

  render(){
      var product= this.state.product[0];
      return(
        <div className='detailed-main-container'>
          <Navbar />
            <h1>{product && product.name} ({ product && product.bottle_size })</h1>

          <div className='product-display'>
            <div className='detailed-left'>
              <img className='detailed-pic' src= {product && product.img_url} alt='product-pic'/>
            </div>

            <div className='detailed-right'>
              <div className='detailed-info'>
                <p className='detailed-desc'>{ product && product.description }</p>
                <h2>${ product && product.price }</h2>
                <h2>pH: { product && product.ph }</h2>
              </div>

              <div className='detailed-btns'>
                <Link to='/products'>
                <RaisedButton className='btn' label="Back" />
                </Link>
                <RaisedButton className='btn' label="Add to Cart" onClick={()=> { this.addCart(product);
                  swal({
                    title: 'Item added to cart!',
                    text: 'Never Stay Thirsty, My Friends',
                    type: 'success',
                    confirmButtonText: 'Keep Shopping'
                  });
                }} />
              </div>
            </div>
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
