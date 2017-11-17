import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import './Detailed.css';

class Detailed extends Component{
  constructor(props){
    super(props);

    this.state={
      product: []
    }
  }

  componentWillMount(){
    axios.get(`/api/details/${this.props.match.params.id}`).then(response=> {
      this.setState({ product: response.data })
    });
  }

addCart(product){
  var user = this.props.user
  console.log(product);
  if(product && user){
    console.log(user);
    axios.post('/cart', { user: user, product_name: product.name, product_price: product.price })
    .then(console.log('posted!'));
  }
}


render(){
    var product= this.state.product[0];
    return(
      <div className='detailed-main-container'>
        <h1>{product && product.name} ({product && product.bottle_size})</h1>

        <div className='detailed-info'>
          <h1>${product && product.price}</h1>
        </div>

        <img className='detailed-pic' src= {product && product.img_url} alt='product-pic'/>
        <h3>pH: {product && product.ph}</h3>
        <p className='detailed-desc'>{product && product.description}</p>

        <div className='detailed-btns'>
          <Link to='/products'>
          <RaisedButton className='btn' label="Back" />
          </Link>
          <RaisedButton className='btn' label="Add to Cart" onClick={this.addCart(product)} />
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
