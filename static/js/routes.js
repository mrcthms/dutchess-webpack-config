import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'views/App';
import Homepage from 'pages/Homepage';

export default (
  <Route
    path="/"
    component={App}>
    <IndexRoute component={Homepage} />
  </Route>
);
