import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default ({component: Component, user, ...rest}) => (
  <Route {...rest} render={(props) => (
      user ? <Component {...props} /> : <Redirect to={{path: '/login', state: {from: props.location}}} />
  )}/>
)