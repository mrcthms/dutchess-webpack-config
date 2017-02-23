import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';

const initialState = {};
let store = configureStore(initialState);

render(
  <Provider store={store}>
    <GatewayProvider>
      <Router
        history={browserHistory}
        routes={routes}
      />
    </GatewayProvider>
  </Provider>,
  document.getElementById('root')
);