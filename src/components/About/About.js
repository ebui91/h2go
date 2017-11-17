import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import './About.css';

class About extends Component{
  render(){
    return(
      <div className='about-main-container'>
        <Navbar />
        <h1>ALL YOU NEED TO KNOW ABOUT ME IS THAT I FUCKING LOVE WATER</h1>
      </div>
    )
  }
}

export default About;
