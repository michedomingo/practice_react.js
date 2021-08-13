import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home, About, Events, Contact, Whoops404 } from './pages.js'; // App is now responsible for rendering

/**
 * NOTES
 * - a component is a function that returns UI
 * - props similar to backpack you can place information in for everysingle component
 *      - when we render the component we pass the properties into the component
 *      - use dot notation in component to display information
 * - keys can help keep data in sync / render properly as app state changes over time
 *
 * useState Hook
 * - 1st item in useState array is the state variable
 * - 2nd item / function is going to update the state
 *      - pass in whatever you want the inital state to be into the useState function
 *      - could be boolean, number, etc - help to many any sort of local variable to keep track of
 *
 * useEffect Hook
 * - typically used to manage side effects that aren't related to the components render
 *      - ex) console messages, loading data, animations
 * - takes in a 2nd argument called dependency array
 *      - pass an empthy array, the props & state inside the effect will always have the initial values
 *          - the effect is not going to be called again after the first render
 *      - can use the array to keep track of values
 *
 * useReducer [function]
 * - takes in the current state and returns a new state
 *
 * 3 possible states when making a HTTP request to an API:
 *      - pending or loading (waiting on data)
 *      - complete / success (data has been fullfilled)
 *      - error / failed (ex. broken URL)
 *  - handling all these States is essential to track down problems / handle latency with loading
 *
 * Create route for each individual component
 *      - what properties will route component have?
 *      - ex) path, element/s
 *      - these routes will tell the router which component to render whenever location changes
 */

function App({ login }) {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/events' element={<Events />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Whoops404 />} />
      </Routes>
    </div>
  );
}

export default App;
