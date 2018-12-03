import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { login } from '../../redux/actions/user.action';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  state = {
    username: 'nquinn721',
    password: 'nate123'
  }
  render() {
    const { user, loggingIn } = this.props.user;

    
    if(user) return <Redirect to="admin" />;

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
            <Button className="btn btn-info form-control"onClick={() => this.props.login(this.state)}>{ loggingIn ? "Logging in..." : "Login" }</Button>
          </Form>
        </div>
      </div>
    );
  }
}


export default connect(
  ({user}) => ({user}),
  (dispatch) => (bindActionCreators({ login }, dispatch))
 )(Login);