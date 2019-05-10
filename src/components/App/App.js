import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>How are you feeling today ?</i></h4>
       
        </header>
        <input className="feeling" type="number" />
        <button>Submit</button>
        <br/>
      </div>
    );
  }
}

export default connect()(App);
