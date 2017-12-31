import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Search from '../Search/Search';
import { Link } from 'react-router-dom';
import Card from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import './Products.css';

class Products extends Component{
  constructor(){
    super();

    this.state= {
      productsList: [],
      filteredProducts: [],
      sortVal: '',
      searchVal: ''
    }
    this.handleSort= this.handleSort.bind(this);
    this.submitSort= this.submitSort.bind(this);
    this.handleSearch= this.handleSearch.bind(this);
    this.submitSearch= this.submitSearch.bind(this);
    this.clearSearch= this.clearSearch.bind(this);
  }

  componentWillMount(){
    axios.get('https://h2go-project.herokuapp.com/products').then(response=>{
      this.setState({ productsList: response.data });
    })
  }

  handleSearch(val){
    this.setState({ searchVal: val });
    this.setState({ filteredProducts: this.state.productsList.filter(product=> {
      return product.name.indexOf(this.state.searchVal) !== -1 })
    });
  }

  submitSearch(){
    this.setState({ productsList: this.state.filteredProducts });
  }

  clearSearch(){
    axios.get('/products').then(response=> {
      this.setState({ productsList: response.data });
    })
  }

  handleSort(val){
    this.setState({ sortVal: val });
  }

  submitSort(){
    axios.get(`/products/${this.state.sortVal}`).then(response=> {
      this.setState({ productsList: response.data });
    })
  }

  render(){
    var products= this.state.productsList.map(function(product, index){
      return(
        <Link to={`/details/${product.id}`} key={index}>
          <Card className='product-container'>
              <p>{product.name}</p>
              <p>${product.price}</p>
              <div className='product-img' style={{ backgroundImage:`url(${product.img_url})` }} alt='product'></div>
              <RaisedButton className='btn' label=" Product Details" />
          </Card>
        </Link>
      )
    });

    return(
      <div className='main-product-container'>
        <Navbar />

        <h1 className='heading'>Products</h1>

        <div className='searchbar'>
          <div className='search'>
            <img className='search-icon' src= { require('../../images/search-icon.png') } alt='search-icon' />
            Search:
            <Search handleSearch= { this.handleSearch } searchVal= { this.state.searchVal } filteredProducts= { this.state.filteredProducts } />
            <RaisedButton className='search-btn' label="SEARCH" onClick={this.submitSearch}/>
            <RaisedButton className='search-btn' label="CLEAR" onClick={this.clearSearch}/>
          </div>

          <div className='sort-by'>
            Sort By:
            <select className='select-field' onChange={ e=> this.handleSort(e.target.value) }>
              <option value='' disabled selected>Select...</option>
              <option value='name'> Name </option>
              <option value='price'> Price (low-to-high)</option>
              <option value='price-desc'> Price (high-to-low)</option>
              <option value='pH'> pH </option>
            </select>

            <RaisedButton label="SORT" onClick={this.submitSort}/>
          </div>
        </div>

          <div className='products-list'>
            { products }
          </div>

        <Footer />
      </div>
    )
  }
}

export default Products;
