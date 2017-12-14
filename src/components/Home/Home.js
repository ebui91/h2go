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

        <section className="section section-light"></section>

        <div className="pimg2">
          <div className="ptext">
            <span className="border-trans light-text">
              NEVER STAY THIRSTY, MY FRIENDS
            </span>
          </div>
        </div>

        <section className="section section-dark">
          <h2> ESSENTIAL </h2>
          <p className='japanese'> Water is a transparent and nearly colorless chemical substance that is the main constituent of Earth's streams, lakes, and oceans, and the fluids of most living organisms. Its chemical formula is H2O, meaning that each of its molecules contains one oxygen and two hydrogen atoms that are connected by covalent bonds. Strictly speaking, water refers to the liquid state of a substance that prevails at standard ambient temperature and pressure; but it often refers also to its solid state (ice) or its gaseous state (steam or water vapor). It also occurs in nature as snow, glaciers, ice packs and icebergs, clouds, fog, dew, aquifers, and atmospheric humidity. </p>
        </section>

        <div className="pimg3">
          <div className="ptext">
            <span className="border-trans light-text">
              STAY WOKE
            </span>
          </div>
        </div>

        <section className="section section-dark">
          <h2> FLUID </h2>
          <p className='japanese'> Water covers 71% of the Earth's surface. It is vital for all known forms of life. On Earth, 96.5% of the planet's crust water is found in seas and oceans, 1.7% in groundwater, 1.7% in glaciers and the ice caps of Antarctica and Greenland, a small fraction in other large water bodies, 0.001% in the air as vapor, clouds (formed of ice and liquid water suspended in air), and precipitation. Only 2.5% of this water is freshwater, and 98.8% of that water is in ice (excepting ice in clouds) and groundwater. Less than 0.3% of all freshwater is in rivers, lakes, and the atmosphere, and an even smaller amount of the Earth's freshwater (0.003%) is contained within biological bodies and manufactured products. A greater quantity of water is found in the earth's interior. </p>
        </section>

        <div className="pimg3"></div>

        <Footer className='footer'/>
      </div>
    )
  }
}

export default Home;
