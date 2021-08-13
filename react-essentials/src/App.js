import React, { useState } from 'react';
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
 */

function App() {
  const [emotion, setEmotion] = useState('happy');
  return (
    <>
      <h1>Current emotion is {emotion}!</h1>
      <button onClick={() => setEmotion('happy')}>Happy</button>
      <button onClick={() => setEmotion('frustrated')}>Frustrate</button>
      <button onClick={() => setEmotion('enthusiastic')}>Enthuse</button>
    </>
  );
}

export default App;
