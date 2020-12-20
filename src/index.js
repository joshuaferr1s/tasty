import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Store from './Store';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <App />
    </Store>
  </React.StrictMode>,
  document.getElementById('root')
);
