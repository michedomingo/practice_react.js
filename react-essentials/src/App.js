import './App.css';
/**
 * NOTES
 * - a component is a function that returns UI
 * - props similar to backpack you can place information in for everysingle component
 *      - when we render the component we pass the properties into the component
 *      - use dot notation in component to display information
 * - keys can help keep data in sync / render properly as app state changes over time
 *
 * - conditional rendering
 */

function SecretComponent() {
  return <h1>Secret info for authorized user only.</h1>;
}

function RegularComponent() {
  return <h1>Everyone can see this component.</h1>;
}

function App(props) {
  return <>{props.authorized ? <SecretComponent /> : <RegularComponent />}</>;
}

export default App;
