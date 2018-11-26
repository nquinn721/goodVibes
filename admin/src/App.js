import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Login from './screens/login';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Login />
      </div>
    );
  }
}

export default connect(
  ({user}) => ({user})
)(App);
