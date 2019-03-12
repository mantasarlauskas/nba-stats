import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';
import App from './components/app';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
