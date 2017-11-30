import React, { Component } from 'react';
import Badge from 'material-ui/Badge';
import { connect } from 'react-redux';
import axios from 'axios';


class CartBadge extends Component{
  constructor(props){
    super(props);
    
    this.state={
      cartList: []
    }
  }
  
  componentWillMount(){
    axios.get(`/cart/${this.props.user.id}`).then(response=> {
      this.setState({ cartList: response.data });
    });    
  }
  
  render(){
    return(
      <div>
        { this.state.cartList.length > 0 ? 
          <Badge
            badgeContent={ this.state.cartList.length }
            primary={ true }
            badgeStyle={{ top: 12, right: 12 }}
            >
          </Badge>
          : <div></div>
        }
      </div>
    )
  }
}

function mapStateToProps(state){
  const { user }= state;
  return{
    user
  }
}

export default connect(mapStateToProps)(CartBadge);