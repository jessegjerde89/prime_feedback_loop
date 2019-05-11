import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class SupportComp extends Component {

  

handleClick = (event) =>{
  event.preventDefault(); 
  
}



  render() {
    return (
      <div >
       
        <h2>How well are you being supported ?</h2>
        <input type="number"></input>
        <Link to='/comments'><button>Submit</button></Link>
        <br/>
      </div>
    );
  }
}

export default connect()(SupportComp);