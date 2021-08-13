import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

/**
 * react-router-dom
 *      - we use bc we're using the DOM, we're using a website
 *      - they also have tools for native apps as well
 * - wrap App component in the router
 *      - give the app all the properties of the router
 *      - ex) location, history, etc (all lives in the router)
 *
 *
 */

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
