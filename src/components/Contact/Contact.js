import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Contact.css';

class Contact extends Component{
  render(){
    return(
      <div className='contact-main-container'>
        <Navbar />

        <div className='contact-main-body'>
          <h1> Contact Us! </h1>
          <p> H2GO &copy; is here to provide you with additional information, or answer any questions you may have. </p>
        </div>

        <div className='inquiry-section'>
          <div>
            <h1> Reason for Inquiry </h1>
            <img className='waterdrop' src={ require('../../images/waterdrop.png') } alt='water-drop' />
            <p> Please select the reason for your inquiry. </p>
          </div>

          <div className='inquiry-options'>
            <div className='inquiry-column'>
              <h2> Customer Service </h2>
              <img className='waterdrop' src={ require('../../images/customer-support-logo.png') } alt='customer support' />
              <p> Get in touch with our Customer Support team for assistance with your purchases or returns. </p>
              <button className='inquiry-btn'> Customer Support </button>
            </div>

            <div className='inquiry-column'>
              <h2> Water Samples </h2>
              <img className='waterdrop' src={ require('../../images/water-drop-logo.png') } alt='water-drop' />
              <p> Request a sample of any of our products. Samples come in a 12oz bottle. Shipping charges may apply. </p>
              <button className='inquiry-btn'> Request a Sample </button>
            </div>

            <div className='inquiry-column'>
              <h2> Sales Support </h2>
              <img className='waterdrop' src={ require('../../images/sales-support-logo.png') } alt='sales support' />
              <p> Reach out to our Sales Team for direct and immediate assistance regarding bulk sales. Please contact us if you would like to become a redistributer. </p>
              <button className='inquiry-btn'> Sales Inquiry </button>
            </div>
          </div>
        </div>

        <div className='contact-info'>
          <div className='contact-left'>
            <h1> Contact Info </h1>
            <p> H2GO Headquarters || Dallas, TX </p>
            <p> (111)111-1111 </p>
            <p> 500 S Ervay St #101, Dallas, TX 75201 </p>
          </div>

          <div className='contact-right'>
            <iframe
              className='map'
              width="600"
              height="450"
              frameborder="0"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDH7Caa3fo2t23huJvBfsj5zaYnpAeOSGs&q=DevMountain,Dallas+TX" allowfullscreen> allowfullscreen>
            </iframe>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default Contact;
