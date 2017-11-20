import React from 'react';
import { Route } from 'react-router-dom';
import Message from './Message';
import Aboutus from './Aboutus';

export default () => {
  return (
    <div>
      <Route exact path="/aboutus" component={Message} />
      <Route path="/aboutus" component={Aboutus} />
    </div>
  );
};
