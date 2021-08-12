import './App.css';
/**
 * NOTES
 * - a component is a function that returns UI
 */
function Header() {
  return (
    <header>
      <h1>Michelle's Kitchen</h1>
    </header>
  );
}

function Main() {
  return (
    <section>
      <p>We serve the most delicious food around!</p>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>It's true.</p>
    </footer>
  );
}

function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
