import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { ResetCSS } from './styles/ResetCSS.style.js';
import { ApplyFont } from './styles/ApplyFont.style.js';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ResetCSS />
    <ApplyFont />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
