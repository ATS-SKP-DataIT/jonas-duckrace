import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Sponsors } from './components/Sponsors/Sponsors';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Sponsors />
  </React.StrictMode>,
  document.getElementById('root')
);

