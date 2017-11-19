import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './styles/base.css';

import AuthenticatedRoute from './components/AuthenticatedRoute';
import Home from './components/Home';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <AuthenticatedRoute exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default App;
