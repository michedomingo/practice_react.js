import React, { useState, useEffect } from 'react';
import './App.css';
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
 */

function App() {
  const [emotion, setEmotion] = useState('happy');
  const [secondary, setSecondary] = useState('tired');

  useEffect(() => {
    console.log(`It's ${emotion} around here!`);
  }, [emotion]);

  useEffect(() => {
    console.log(`It's ${secondary} around here!`);
  }, [secondary]);

  return (
    <>
      <h1>
        Current emotion is {emotion} and {secondary}!
      </h1>
      <button onClick={() => setEmotion('happy')}>Make Happy</button>
      <button onClick={() => setSecondary('crabby')}>Make Crabby</button>
      <button onClick={() => setEmotion('frustrated')}>Frustrate</button>
      <button onClick={() => setEmotion('enthusiastic')}>Enthuse</button>
    </>
  );
}

export default App;
