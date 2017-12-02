import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { reqUser } from '../../redux/reducer';
import RaisedButton from 'material-ui/RaisedButton';
import Badge from '../Badge/Badge';
import './Navbar.css';

class Navbar extends Component{
  constructor(props){
    super(props);

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
      <div className='nav-main'>
        <div className='nav-top'>
          <Link to='/'>
            <img className='nav-logo' src={require('../../images/logo.png')} alt='h2go-logo' />
          </Link>
          <h1>Welcome { this.props.user.name }!</h1>
        </div>

        <div className='nav-mid'>
          <Link className='third after' to='/about'>
            <span>About</span>
          </Link>

          <Link className='third after' to='/contact'>
            <span>Contact</span>
          </Link>

          <Link className='third after' to='/products'>
            <span>Products</span>
          </Link>
        </div>

        <div className='nav-bottom'>
          <div className='cart'>
            <Link to='/cart'>
              <img className='shopping-cart' src={ require('../../images/shopping-cart.png') } alt='shopping-cart'/>
            </Link>
            <Badge />
          </div>
          <RaisedButton className='log-btn' label={ this.props.logged } onClick={ this.handleLogin } />
          <img src={ require('../../images/login-key-icon.png') } className='mobile-btn' alt='login-logo'/>
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
