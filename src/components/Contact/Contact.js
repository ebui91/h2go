import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import './Contact.css';

class Contact extends Component{
  render(){
    return(
      <div className='contact-main-container'>
        <Navbar />
        <h1>Contact Page</h1>
        <p>Fucking contact me if you want to buy some fucking water.</p>
      </div>
    )
  }
}

export default Contact;
