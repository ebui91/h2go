import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Home.css';

class Home extends Component{
  render(){
    return(
      <div className='home-container'>
        <Navbar />

        <div id="home" className="pimg1">
          <div className="ptext">
            <span className="border">
              H2GO
            </span>
          </div>
        </div>

        <section className="section section-light">

        </section>

        <div className="pimg2">
          <div className="ptext">
            <span className="border-trans light-text">
              NEVER STAY THIRSTY, MY FRIENDS
            </span>
          </div>
        </div>

        <section className="section section-light">
          <h2>FLUID</h2>
          <p className='japanese'> Water is deceptive. For while it pours freely from the heavens and seems to flow endlessly in rivers, it’s a finite resource; we only have what we have. And although there is about 332,500,000 cubic miles of it on earth – only one-hundredth of one percent of the world's water is readily available for human use. We really need to learn how to show it some respect.  </p>
        </section>

        <div className="pimg3">
          <div className="ptext">
            <span className="border-trans light-text">
            </span>
          </div>
        </div>

        <section className="section section-light">
          <h2> NATURAL  </h2>
          <p className='japanese'> Drinking Water Helps Maintain the Balance of Body Fluids. Your body is composed of about 60% water. The functions of these bodily fluids include digestion, absorption, circulation, creation of saliva, transportation of nutrients, and maintenance of body temperature.  </p>
        </section>

        <div className="pimg3"></div>

        <Footer className='footer'/>
      </div>
    )
  }
}

export default Home;
