import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { ResetCSS } from './styles/ResetCSS.style.js';
import { BodyAndRootStyles } from './styles/BodyAndRootStyles.style.js';

ReactDOM.render(
  <React.StrictMode>
    <ResetCSS />
    <BodyAndRootStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);