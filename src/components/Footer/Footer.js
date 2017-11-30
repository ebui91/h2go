import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends Component{
  render(){
    return(
      <div className='footer-main-container'>
        <div className='columns'>
          <div className='footer-column'>
            <h2>About</h2>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Corporate Sales</li>
              <li>Water Redistribution</li>
            </ul>
          </div>

          <Link to='/contact'>
            <div className='footer-column'>
              <h2>Support</h2>
              <ul>
                <li>Contact</li>
                <li>Returns</li>
                <li>Customer Service</li>
              </ul>
            </div>
          </Link>

          <div className='footer-column'>
            <h2>Legal</h2>
            <ul>
              <li>Privacy</li>
              <li>Terms</li>
              <li>Patents</li>
            </ul>
          </div>

          <div className='footer-column'>
            <h2>Account</h2>
            <ul>
              <li>My Account</li>
              <li>Past Orders</li>
              <li>Favorites</li>
              <li>Rewards Points</li>
            </ul>
          </div>
        </div>

        <div className='social-media'>
          <ul className="social-media-links">
            <li><a href="https://www.facebook.com/sharer/sharer.php?u=https://www.h2go.life" target="_blank" rel='noopener noreferrer'><i className='fa fa-2x fa-facebook'></i></a></li>
            <li><a href="https://twitter.com/home?status=Just%20bought%20water%20from%20H2GO!"  target="_blank" rel='noopener noreferrer'><i className='fa fa-2x fa-twitter'></i></a></li>
            <li><a href="https://www.instagram.com/"  target="_blank"><i className='fa fa-2x fa-instagram' rel='noopener noreferrer'></i></a></li>
            <li><a href="https://pinterest.com/pin/create/button/?url=&media=&description=Just%20bought%20water%20from%20H2GO!"  target="_blank" rel="noopener noreferrer"><i className='fa fa-2x fa-pinterest'></i></a></li>
          </ul>
        </div>

        <div className='company-info'>
          <p>	&copy; 2017 H2GO.life  ||  All Rights Reserved </p>
          <p> Site By: Eric Bui </p>
        </div>
      </div>
    )
  }
}

export default Footer;
