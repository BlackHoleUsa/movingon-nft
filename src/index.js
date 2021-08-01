import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './global.css';
import MovingOn from './App';
import reportWebVitals from './reportWebVitals';

import { HashRouter as Router } from "react-router-dom";

import './fonts/Montserrat-Black.ttf';
import './fonts/Montserrat-Light.ttf';
import './fonts/Montserrat-Medium.ttf';
import './fonts/Montserrat-Regular.ttf';
import './fonts/Montserrat-SemiBold.ttf';

import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';

import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { configureStore } from './redux/store';

const store = configureStore();

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <Router>
          <MovingOn />
        </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
