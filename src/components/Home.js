import React, { Component } from 'react';
import Navbar from './Navbar';
import MessageContainer from './MessageContainer';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MessageContainer />
      </div>
    );
  }
}
