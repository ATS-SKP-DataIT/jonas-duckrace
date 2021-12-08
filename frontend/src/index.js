import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Navigation as Navbar } from './Layout/Navbar';
import { Sponsors as Sponsor } from './components/Sponsors/Sponsors';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Sponsor />
  </React.StrictMode>,
  document.getElementById('root')
);