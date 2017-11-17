import React, { Component } from 'react';
import './Navbar2.css';

class Navbar2 extends Component{
  render(){
    return(
      <div className="pure-container" data-effect="pure-effect-slide">
        <label className="pure-toggle-label" for="pure-toggle-left" data-toggle-label="left">
            <span className="pure-toggle-icon"></span>
        </label>

        <div className="pure-drawer" data-position="left">
            Put your off canvas content here
        </div>

        <div className="pure-pusher-container">
            <div className="pure-pusher">
                Put your site content here 
            </div>
        </div>
        <label className="pure-overlay" for="pure-toggle-left" data-overlay="left"></label>
      </div>
    )
  }
}

export default Navbar2;
