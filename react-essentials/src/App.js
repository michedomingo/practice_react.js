import './App.css';
/**
 * NOTES
 * - a component is a function that returns UI
 * - props similar to backpack you can place information in for everysingle component
 *      - when we render the component we pass the properties into the component
 *      - use dot notation in component to display information
 */
function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around!</p>
      <ul style={{ textAlign: 'left' }}>
        {props.dishes.map((dish) => (
          <li>{dish}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

const dishes = ['Macaroni and Cheese', 'Salmon', 'Tofu with Vegetables'];

function App() {
  return (
    <div className='App'>
      <Header name='Michelle' />
      <Main adjective='amazing' dishes={dishes} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
