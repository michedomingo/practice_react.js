import React from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * When we create a React application, we create a single page app (SAP)
 *  - instead of creating different files for different pages
 *  - we create a single page and JavaScript loads info and changes the UI
 *
 * React Router - tool helps to handle routing with SPA
 *      to install - $ npm install react-router@next react-router-dom@next
 *
 * pages.js - responsible for all pages a part of this app
 * - export a bunch of different functions
 *      - small components that will be display to navigate around site
 *      - have components display when going to certain routes on site
 *
 * index.js - build router, pass all info from router to any nested components
 *
 * useLocation - Hook / function that returns current location
 */

export function Home() {
  return (
    <div>
      <h1>[Company Website]</h1>
      <nav>
        <Link to='about'>About</Link>
        <Link to='events'>Events</Link>
        <Link to='contact'>Contact</Link>
      </nav>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>[About]</h1>
    </div>
  );
}

export function Events() {
  return (
    <div>
      <h1>[Events]</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>[Contact]</h1>
    </div>
  );
}

export function Whoops404() {
  let location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Resource not found at {location.pathname}!</h1>
    </div>
  );
}
