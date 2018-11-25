import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ContactUs from './contactUs';
import coolImage from'./assets/wearecool.png';

export default class Connections extends React.Component{
	render(){
		return (
			<div style={{height: 600, padding: 60, backgroundColor: '#1b134a'}}>
				<Container>
					<Row>
						<Col sm="12" md="12">
							<h3 className="connections-title" style={{color: '#ff4f55', textAlign: 'center', paddingBottom: '0'}}>Connect with local community</h3>
							<div style={{width: '35%', margin: '0 auto'}}>
								<p className="map-text" style={{textAlign: 'center', textIndent: '35pt'}}>We provide the platform for artists, musicians, and cannabis connoisseurs to come together to create beautiful moments</p>
							</div>
						</Col>
					</Row>
					<Row>
						<Col sm="12" md="6">
          					<img src={coolImage} className="cool-image" style={{float: 'right'}}/>
						</Col>
						<Col sm="12" md="6">
							<h3 className="connections-title" style={{color: '#ff4f55', marginTop: '100px'}}>Subscribe</h3>
							<p className="map-text" style={{textIndent: '35pt'}}>to get the latest updates on our journey</p>
						</Col>
					</Row>
				</Container>

	            <ContactUs />
	        </div>
        )
	}
}
