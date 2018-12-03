import React from 'react';
import { connect } from 'react-redux';


class Dashboard extends React.Component {
  render() {
    const { strains } = this.props,
          flavors = {};
    
    if(!strains)return (<div></div>);

    strains.map(v => v.Flavors && v.Flavors.map(f => flavors[f] = true));
    
    return (
      <div className="dashboard-component">
        <div className="dashboard-component-title">Flavors</div>
        {Object.keys(flavors).map((v, i) => (<div key={i}>{v}</div>))}
      </div>
    )
  }
}


export default connect(
 )(Dashboard);