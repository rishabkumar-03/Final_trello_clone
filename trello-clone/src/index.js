import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

import 'typeface-roboto';

import {PersistGate} from 'redux-persist/integration/react';

import {store,persistor} from './Store/index';

ReactDOM.render(
  <Provider store={ store }>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate >
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
