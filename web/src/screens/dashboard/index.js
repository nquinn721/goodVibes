import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../../nav/navbar';
import { bindActionCreators } from 'redux';
import { getStrainData } from '../../redux/actions/strains.action';
import Flavors from './components/flavors';

import './dashboard.css';

class Dashboard extends React.Component {
  componentDidMount(){
    this.props.getStrainData();
  }
  render() {
    const { strains } = this.props.strains;
    
    
    return (
      <div>
        <NavBar />
        <div className="container dashboard">
          <Flavors strains={strains}/>
        </div>
      </div>
    )
  }
}


export default connect(
  ({strains}) => ({strains}),
  (dispatch) => (bindActionCreators({ getStrainData }, dispatch))
 )(Dashboard);