import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../../nav/navbar';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>Welcome to the admin panel</h1>
      </div>
    )
  }
}


export default connect(
  // (state) => ({}),
  // (dispatch) => (bindActionCreators({ Dashboard }, dispatch))
 )(Dashboard);