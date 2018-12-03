import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../../nav/navbar';
import { bindActionCreators } from 'redux';
import { getData } from '../../redux/actions/data.action';
import Flavors from './components/flavors';
import { Table } from 'reactstrap';

import './dashboard.css';

class Dashboard extends React.Component {
  componentDidMount(){
    this.props.getData();
  }
  render() {
    const { strains, dispensaries, brands, gotData } = this.props.data;
    console.log(this.props.data);
    
    if(!gotData)return <div>Loading data...</div>
      
    return (
      <div>
        <NavBar />
        <div className="container dashboard">
          <Table>
            <tbody>
              <tr>
                <td>Total Strains {strains.length} </td>
              </tr>
              <tr>
                <td>Total Brands {brands.length} </td>
              </tr>
              <tr>
                <td>Total Yelp Dispensaries {dispensaries.yelpDispensaries.length}</td>
              </tr>
              <tr>
                <td>Total Leafly Dispensaries {dispensaries.dispensariesFromLeafly.length}</td>
              </tr>
            </tbody>
          </Table>
          <Flavors strains={strains}/>
        </div>
      </div>
    )
  }
}


export default connect(
  ({data}) => ({data}),
  (dispatch) => (bindActionCreators({ getData }, dispatch))
 )(Dashboard);