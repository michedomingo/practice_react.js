import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/**
 * index.js file is the entry point for our application
 *      - it calls a separate component called App (does not start outputting HTML to our page)
 *      - it imports it from ./App file which then displays the info returned from App() function
 * app.js calls a different component from the React icons library
 *
 */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
