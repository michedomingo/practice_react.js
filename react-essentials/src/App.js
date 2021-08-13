import './App.css';
import restaurant from './restaurant.jpg';
/**
 * NOTES
 * - a component is a function that returns UI
 * - props similar to backpack you can place information in for everysingle component
 *      - when we render the component we pass the properties into the component
 *      - use dot notation in component to display information
 * - keys can help keep data in sync / render properly as app state changes over time
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
      <img
        src={restaurant}
        height={200}
        alt='silverware with napkin on top of plate at a restaurant table'
      />
      <ul style={{ textAlign: 'left' }}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
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

const dishes = [
  'Macaroni and Cheese',
  'Salmon',
  'Tofu with Vegetables',
  'Minestrone',
];

// transormation function - turn list of items/dishes into objects
const dishObjects = dishes.map((dish, i) => ({ title: dish, id: i }));
// console.log(dishObjects);

function App() {
  return (
    <div className='App'>
      <Header name='Michelle' />
      <Main adjective='amazing' dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
