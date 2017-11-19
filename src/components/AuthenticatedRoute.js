import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
  if (true) {
    return <Redirect to="/login" />;
  }
  return <Route {...rest} component={Component} />;
};

export default AuthenticatedRoute;
