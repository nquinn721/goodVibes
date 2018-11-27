import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { login } from '../../redux/actions/user.action';

class Login extends React.Component {
  state = {
    username: 'nquinn721',
    password: 'nate123'
  }
  render() {
    return (
      <div className="row full-height align-items-center justify-content-center">
        <div className="col-4">
          <Form>
            <FormGroup>
              <Label for="exampleusername">Username</Label>
              <Input type="username" name="username" id="exampleusername" placeholder="username..." onChange={e => this.setState({username: e.target.value})} />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password..." onChange={e => this.setState({password: e.target.value})}/>
            </FormGroup>
              <input type="button" className="btn btn-info form-control" value="Login" onClick={() => this.props.login(this.state)}/>
          </Form>
        </div>
      </div>
    );
  }
}


export default connect(
  (state) => ({}),
  (dispatch) => (bindActionCreators({ login }, dispatch))
 )(Login);