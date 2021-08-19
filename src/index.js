import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { ResetCSS } from './styles/ResetCSS.style.js';
import { BodyStyles } from './styles/BodyStyles.style.js';

ReactDOM.render(
  <React.StrictMode>
    <ResetCSS />
    <BodyStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);