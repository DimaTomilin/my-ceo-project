import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {
  consoleMiddleware,
  checkAvailableAmountMiddleware,
  checkDeleteMiddleware,
} from './middleware/Middleware';

const middlewareEnhancer = applyMiddleware(
  consoleMiddleware,
  checkAvailableAmountMiddleware,
  checkDeleteMiddleware
);

const store = createStore(RootReducer, middlewareEnhancer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
