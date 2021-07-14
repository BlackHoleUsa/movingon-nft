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

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <MovingOn />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
