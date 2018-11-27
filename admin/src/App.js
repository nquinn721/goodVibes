import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Login from './screens/login';
import Dashboard from './screens/dashboard';

class App extends Component {
  render() {
	const { user } = this.props.user;
	console.log(user);
	
    return (
      <div className="App">
      	{user ? <Dashboard /> : <Login />}
      </div>
    );
  }
}

export default connect(
  ({user}) => ({user})
)(App);
