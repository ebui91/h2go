import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Transition from 'react-transition-group/Transition';
import './About.css';

class About extends Component{
  render(){
    return(
      <div className='about-main-container'>
        <Navbar />

        <h1 className='heading'>ABOUT H2GO</h1>
        <div className='splash-img'>
          <div className='splash-text'></div>
        </div>

        <div className='about-info'>
          <div className='about-row'>
            <div className='about-row-right'>
              <div id='left1'></div>
            </div>

            <div className='about-row-right'>
              <h2>Industry Leader</h2>
              <p>H2GO is one of the prime leaders in the industry for water redistribution. Supplying more than 85% of water to online consumers across the globe, H2GO promises to deliver the highest quality hydrogen dioxide to our customers at the most competetive price.</p>
              <hr />
              <p id='about-subheading'>"Never stay thirsty, my friends."</p>
            </div>
          </div>

          <div className='about-row'>
            <div className='about-row-right'>
              <h2>ABOUT WATER</h2>
              <p>Water is a transparent and nearly colorless chemical substance that is the main constituent of Earth's streams, lakes, and oceans, and the fluids of most living organisms. Its chemical formula is H2O, meaning that each of its molecules contains one oxygen and two hydrogen atoms that are connected by covalent bonds.
              </p>
              <hr />
              <p id='about-subheading'>"H2O, the universal solvent."</p>
            </div>

            <div className='about-row-left'>
              <div id='left2'></div>
            </div>
          </div>

          <div className='about-row'>
            <div className='about-row-left'>
              <div id='left3'></div>
            </div>

            <div className='about-row-right'>
              <h2>THE ESSENCE OF LIFE</h2>
              <p>The average human body is comprised of approximately 50 to 65% of water. Water also covers about 70.9% of the Earth's surface. In a year, the average American residence consumes over 100,000 gallons of water. A person can live about a month without food, but only about a week without water. If a human does not absorb enough water dehydration is the result.</p>
              <hr />
              <p id='about-subheading'>"A product you cannot live without."</p>
            </div>
          </div>
        </div>

        <div className='testimonials-container'>
            <h1> Testimonials </h1>

          <div className='steven-testimonial'>
              <img className='testimonial-avatar' src={ require('../../images/steven-test.png') } />
              <h3> Steven Isbell </h3>
              <hr />
              <p><span className='test-quote'>''</span>Really, really cool piece of tech. <div className='steven-img'>👌🏻</div><span className='test-quote'>''</span></p>
          </div>

          <div className='testimonial-cols'>
            <div className='testimonial-ind'>
              <img className='testimonial-avatar' src={ require('../../images/kara-test.png') } />
              <h3> Kara Cavanaugh </h3>
              <hr className='test-line-break'/>
              <p className='testimonial'><span className='test-quote'>''</span> Hey, long time drinker, first time buyer here. I was skeptical at first about the benefits of drinking water out of a bottle instead of out of a faucet, but I have to say, I notice a HUGE difference in how I feel after buying Aquafina. My skin is clearer- my hair is Jaylan-quality fine. I will never go back to tap. <span className='test-quote'>''</span></p>
            </div>

            <div className='testimonial-ind'>
              <img className='testimonial-avatar' src={ require('../../images/matt-test.png') } />
              <h3> Matthew H. Carson </h3>
              <hr className='test-line-break'/>
              <p className='testimonial'><span className='test-quote'>''</span>gucci gang gucci gang gucci gang gucci gang gucci gang gucci gang gucci gang gucci gang gucci gang gucci gang gucci gang gucci gang gucci gang gucci gang gucci gang gucci ganggucci gang gucci gang gucci gang gucci gang gucci gang gucci gang gucci gang gucci gang gucci gang gucci gang gucci gang gucci gang gucci gang<span className='test-quote'>''</span></p>
            </div>

            <div className='testimonial-ind'>
              <img className='testimonial-avatar' src={ require('../../images/zach-test.png') } />
              <h3> Zachary Gerhart </h3>
              <hr className='test-line-break'/>
              <p className='testimonial'><span className='test-quote'>''</span> I had never tried water before discovering H2GO. I think I was about 21 years of age when I had my first sip of water, and I've been hooked since. I would definitely recommend H2GO to all of my friends because they have all types of water. <span className='test-quote'>''</span></p>
            </div>

            <div className='testimonial-ind'>
              <img className='testimonial-avatar' src={ require('../../images/aja-test.png') } />
              <h3> Aja Cederberg </h3>
              <hr className='test-line-break'/>
              <p className='testimonial'><span className='test-quote'>''</span> I consider myself somewhat of a connoisseur when it comes to water. I only drink water with a pH of at least 8.2, so I was thoroughly impressed by the abundant product selection H2GO has to offer. H2GO has been the only website I've found that offers my special Aja water. <span className='test-quote'>''</span></p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default About;
