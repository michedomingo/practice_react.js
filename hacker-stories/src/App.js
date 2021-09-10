const welcome = {
  greeting: 'Hey',
  title: 'React',
};

function getTitle(title) {
  return title;
}

function App() {
  return (
    <div>
      <h1>
        {welcome.greeting} {welcome.title}
      </h1>
      <h3>Hello {getTitle('React')}!</h3>

      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' />
    </div>
  );
}

export default App;
