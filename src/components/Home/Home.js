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
          <p> Water (H2O) is a polar inorganic compound that is at room temperature a tasteless and odorless liquid, which is nearly colorless apart from a hint of blue. It is by far the most studied chemical compound and is described as the "universal solvent" for its ability to dissolve many substances. This allows it to be the "solvent of life". It is the only common substance to exist as a solid, liquid, and gas on Earth. </p>
        </section>

        <div className="pimg3">
          <div className="ptext">
            <span className="border-trans light-text">
              I SELL WATER
            </span>
          </div>
        </div>

        <section className="section section-light">
          <h2>Section Three</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>

        <div className="pimg3"></div>

        <Footer className='footer'/>
      </div>
    )
  }
}

export default Home;
