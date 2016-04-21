import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import configureStore from './store/configureStore';

import Home from './containers/Home';
import App from './components/App';
import NotFound from './components/NotFound';

import openMRS from './lib/openMRS';

import './index.css';

openMRS.login('admin', 'Admin123')
  .then(() => console.log('Login Successful'));

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
