import React from 'react';
import './index.css';
import TitlePage from './titlePage';
import Map from './map';
import Connections from './connections';
import Footer from './footer';
import { connect } from 'react-redux';

class FullPage extends React.Component {
  render(){
    return (
    <div>
      <TitlePage />
      <Map />
      <Connections />
      <div style={{height: '75vh', color: '#666666', backgroundColor: '#ffffff'}}></div>
      
      <Footer />
    </div>

    );
  }
}

export default connect()(FullPage);