import React, { Component } from 'react';
import Sidebar from '../Navbar/Sidebar';
import './About.css';

class About extends Component{
  render(){
    return(
      <div className='about-main-container'>
        <Sidebar />
      </div>
    )
  }
}

export default About;
