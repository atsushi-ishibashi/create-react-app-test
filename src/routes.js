import React from 'react';
import { Router, Route } from 'react-router';

import NotFound from './components/NotFound';
import App from './App';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
