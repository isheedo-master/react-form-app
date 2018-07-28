import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';

const AppRouter = () => (
  <Router>
    <Route path="/" component={App} />
  </Router>
);

const appElement = document.getElementById('app'); //eslint-disable-line

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  appElement,
);

module.hot.accept();
