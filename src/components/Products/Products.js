import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchProducts, submitSearch } from '../../redux/reducer';
import Card from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import './Products.css';

class Products extends Component{
  constructor(){
    super();

    this.state= {
      productsList: [],
      sortVal: ''
    }

    this.handleSort= this.handleSort.bind(this);
    this.submitSort= this.submitSort.bind(this);
  }

  componentWillMount(){
    axios.get('/products').then(response=>{
      this.setState({ productsList: response.data });
    })
  }

  handleSort(val){
    this.setState({ sortVal: val })
  }

  submitSort(){
    axios.get(`/products/${this.state.sortVal}`).then(response => {
      this.setState({ productsList: response.data });
    })
  }




  render(){
    const products= this.state.productsList.map(function(product, index){
      return(
        <Link to={`/details/${product.id}`} key={index}>
        <Card className='product-container'>
            <p>{product.name}</p>
            <p>${product.price}</p>
            <div className='product-img' style={{backgroundImage:`url(${product.img_url})`}} alt='product'></div>
            <RaisedButton label=" Product Details" />
        </Card>
        </Link>
      )
    })
    return(
      <div className='main-product-container'>
        <Navbar />
        <h1>Products</h1>

        <div className='searchbar'>
          <div className='search'>
            Search:
            <input className='input-field' type='text' placeholder='...' onChange={ e=> this.props.searchProducts(e.target.value) }></input>
            <RaisedButton label="SEARCH" onClick={this.props.submitSearch}/>
          </div>

          <div className='sort-by'>
            Sort By:
            <select className='select-field' onChange={ e=> this.handleSort(e.target.value) }>
              <option value='name'> Name </option>
              <option value='price'> Price (ascending)</option>
              <option value='price-desc'> Price (descending)</option>
              <option value='pH'> pH </option>
            </select>

            <RaisedButton label="SORT" onClick={this.submitSort}/>
          </div>
        </div>

        { products }
      </div>
    )
  }
}

function mapStateToProps(state){
  const { searchVal }= state;
  return{
    searchVal
  };
}

export default connect(mapStateToProps, { searchProducts, submitSearch })(Products);
