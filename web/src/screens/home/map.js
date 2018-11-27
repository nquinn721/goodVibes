import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import phone2 from'./assets/phone2.png';
// import Layout from 'goodVibes/constants/Layout';

export default class Map extends React.Component{
	render(){
		return (

		<div style={{display: 'block', padding: 60, backgroundColor: '#ff4f55'}}>
			<Container>
				<Row>
		          <Col xs="12" sm="12" md="6">
		          	<img src={phone2} className="map-style" style={{float: 'right'}}/>
		          </Col>
		          <Col xs="12" sm="12" md="6">
		          	<h3 className="map-title" style={{color: '#1b134a'}}>Find dispensaries near you</h3>
		          	<p className="map-text" style={{width: '60%'}}>Our platform allows you to see dispensaries near you</p>
		          	<p className="map-text" style={{width: '60%'}}>order for delivery or schedule for pick up when you’re on your way home</p>
		          </Col>
				</Row>
	      	</Container>
	    </div>
        )
	}
}