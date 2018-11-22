import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button, Form, FormGroup, Label, FormText } from 'reactstrap';

export default class ContactUs extends React.Component{
	render(){
		return (
			<div style={{padding: 30}}>
				
					<Container style={{width: '60%', padding: '0'}}>
					<Row>
						<Col sm="12" md="12">
							<div style={{textAlign: 'center', marginTop: '30px'}}>
								<h3 className="connections-title" style={{color: '#ff4f55', textAlign: 'center', paddingBottom: '0'}}>Contact us</h3>
								<p style={{fontSize: '0.8em'}}>We would love to partner with you</p>
			            	</div>
						</Col>
					</Row>
					<Form>
					<FormGroup>

					<Row>
						<Col sm="12" md="6">
						<InputGroup>
							<InputGroupAddon>Name</InputGroupAddon>
							<Input />
						</InputGroup>
						</Col>
						<Col sm="12" md="6">
						<InputGroup>
							<InputGroupAddon>Email</InputGroupAddon>
							<Input />
						</InputGroup>
						</Col>

					</Row>
					<Row>
						<Col sm="12" md="12">

						</Col>
					</Row>
					<Input type="textarea" style={{height: '30vh', margin: '5px 0'}} name="text" id="exampleText" />
        			<Button style={{width: '100%', backgroundColor: '#ff4f55'}}>Submit!</Button>
        			
        			</FormGroup>

					</Form>

		            </Container>
	        </div>
        )
	}
}