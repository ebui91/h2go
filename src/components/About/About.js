import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './About.css';

class About extends Component{
  render(){
    return(
      <div className='about-main-container'>
        <Navbar />

        <div className='about-body'>
          <h1 className='heading'>ABOUT H2GO</h1>
        </div>

        <div className='testimonials-container'>

        </div>

        <Footer />
      </div>
    )
  }
}

export default About;
