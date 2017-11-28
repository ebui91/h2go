import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { reqUser } from '../../redux/reducer';
// import RaisedButton from 'material-ui/RaisedButton';
import './Sidebar.css';

class Sidebar extends Component{
  constructor(props){
    super(props);

    this.state= {};

    this.handleLogin= this.handleLogin.bind(this);
  }

  handleLogin(){
    window.location.href= "http://localhost:3001/login";
  }

  componentDidMount(){
    this.props.reqUser();
  }

  render(){
    return(
        <div className='sidebar-main'>
          <Link to='/'>
            <h3>Home</h3>
          </Link>
        </div>
    )
  }
}

function mapStateToProps(state){
  const { user, logged }= state;
  return{
    user,
    logged
  };
}

export default connect(mapStateToProps, { reqUser })(Sidebar);
