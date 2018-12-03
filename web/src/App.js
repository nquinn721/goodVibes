import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Login from './screens/login';
import Dashboard from './screens/dashboard';
import Home from './screens/home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

class App extends Component {
  render() {
	const { user } = this.props.user;
    return (
      <Router>
        <div className="App">
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <ProtectedRoute path="/admin" component={Dashboard} user={user} />
        </div>
      </Router>
    );
  }
}

export default connect(
  ({user}) => ({user})
)(App);
