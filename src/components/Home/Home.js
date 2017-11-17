import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css';

class Home extends Component{
  render(){
    return(
      <div className='home-container'>
        <Navbar />
        <section className='water'>
          <h1>HOLY SHIT, ITS THE HOME PAGE YO</h1>
        </section>
      </div>
    )
  }
}

export default Home;
