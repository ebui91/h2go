import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { reqUser } from '../../redux/reducer';
import RaisedButton from 'material-ui/RaisedButton';
import './Navbar.css';

class Navbar extends Component{
  constructor(props){
    super(props);

    this.state= {};

    this.handleLogin= this.handleLogin.bind(this);
  }

  handleLogin(){
    window.location.href= "http://localhost:3001/login";
  }

  componentDidMount(){
    this.props.reqUser();
  }

  render(){
    return(
      <div className='nav-main transparent'>
        <div className='nav-top'>
          <Link to='/'>
            <img className='nav-logo' src={require('../../images/logo.png')} alt='h2go-logo' />
          </Link>
          <h1>Welcome {this.props.user.name}!</h1>
        </div>

        <div className='nav-mid'>
          <Link to='/products'>
            <h3>Products</h3>
          </Link>

          <Link to='/about'>
            <h3>About</h3>
          </Link>

          <Link to='/contact'>
            <h3>Contact</h3>
          </Link>
        </div>

        <div className='nav-bottom'>
          <Link to='/cart'>
            <img className='shopping-cart' src={require('../../images/shopping-cart.png')} alt='shopping-cart'/>
          </Link>
          <RaisedButton label={this.props.logged} onClick={this.handleLogin} />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  const { user, logged }= state;
  return{
    user,
    logged
  };
}

export default connect(mapStateToProps, { reqUser })(Navbar);
