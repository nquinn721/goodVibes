import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import phone1 from'./assets/phone1.png';
import titleBackground from'./assets/background.png';

export default class TitlePage extends React.Component{
	render(){
		return (
			<div style={{display: 'block', padding: 0, height:'150vh', backgroundColor: '#f6f6f6'}}>
			<div style={{backgroundImage: "url(" + titleBackground + ")", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center', height: '80vh'}}>
				<div style={{backgroundColor: 'rgb(255,79,85, 0.5)', textAlign: 'center', padding: '5px'}}>
        			<a style={{fontSize: '0.8em', color: '#ffffff'}}><strong>goodvibes</strong></a>
      			</div>

				<Container>
					<div style={{height: '25vh', display: 'block'}}></div>
					<Row>
						<Col sm="12" md="6">
							<h3 className="connections-title" style={{color: '#ffffff', textAlign: 'right', paddingBottom: '0'}}>Let the Good Vibes flow</h3>
								<p className="map-text" style={{textAlign: 'right', width: '80%', float: 'right'}}>Good Vibes is a digital marketplace that connects consumers, dispensaries and event organizers</p>
						</Col>
					</Row>
					<Row>
						<Col sm="12" md={{size: 6, offset: 6}}>
          					<img src={phone1} className="cool-image" style={{width: '50%'}}/>

						</Col>
					</Row>
					<div style={{height: '25vh', display: 'block'}}>
						<Row  style={{padding: 0, margin: 0}}>
							<Col sm="12" md={{size: 6, offset: 2}}>
								<h3 className="connections-title" style={{color: '#ff4f55'}}>Convenient</h3>
								<p className="title-text" style={{textIndent: '0pt', margin: '-10 px 0px 50px'}}>delivery and pick up</p>
							</Col>
						</Row>
						<Row>
							<Col sm="12" md={{size: 6, offset: 4}}>
								<h3 className="connections-title" style={{color: '#ff4f55'}}>Events</h3>
								<p className="title-text" style={{textIndent: '0pt', margin: '-10 px 0px 50px'}}>Community art and concerts</p>
							</Col>
						</Row>
						<Row>
							<Col sm="12" md={{size: 6, offset: 6}}>
								<h3 className="connections-title" style={{color: '#ff4f55'}}>Trusted</h3>
								<p className="title-text" style={{textIndent: '0pt', margin: '-10 px 0px 50px'}}>local dispensaries and venues</p>
							</Col>
						</Row>
					</div>

				</Container>

			</div>

	        </div>
        )
	}
}