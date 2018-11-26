import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Nav from './nav/navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
      </div>
    );
  }
}

export default connect(
  ({strains}) => ({strains})
)(App);
