import { useState, useEffect, useCallback } from 'react';
import { BiCalendar } from 'react-icons/bi';
import Search from './components/Search';
import AddAppointment from './components/AddAppointment';
import AppointmentInfo from './components/AppointmentInfo';

/**
 *
 * Install Tailwind / Modify JSX
 *      - add classes that modify styling directly on the components
 * https://reactjs.org/docs/introducing-jsx.html
 * container: add to tailwind project to make content align to the grid
 *      - creates the grid that tailwind has (like a bootstrap grid) - 12 column customizable grid
 * mx-auto: centers the grid onscreen (otherwise, everything will be left align)
 * mt-# / mt-3: property for classes that set margin size
 * font-thin: react font weight
 * text-5xl: (properties font-size: 3rem; line-height: 1;) https://tailwindcss.com/docs/font-size
 * inline-block: logo by default is a block, puts a little bit of space after block and puts next thing on new line
 * text-red-400: specify what you want to change to for color name/strength
 *         - anything above 500 is a shade, anything below 500 is a tint
 * divide-y: show dividers in between the different items vertically
 *
 * <BiCalendar /> - call icon component as a HTML tag with properties
 *
 * appointmentList - use variable with map function to create a temp variable called appointment for each of the items as they come in
 *      - use arrow function then parenthesis which will be what gets returned from this appointmentList and replaced instead of the expression
 *      - bringing in JSON data can go straight into a variable that can be used with regular JavaScript to map a series of HTML/JSX into the variable and display list easily with dot notation/jsx
 *
 * AppointmentInfo
 * use a key when looping through a series of elements
 * - destructuring: pass along info through appointment variable, received through AppointmentInfo component
 *      - pass different variables/objects/events, makes it easier to breakdown compnents into pieces
 *
 * data.json
 * - normally data wouldn't be coming from your own project (in src folder)
 *      - usually get data from an API, like GraphQL or your own REST API
 *      - put data.json file in public folder to export with our project and be available as a URL (to simulate getting data from an API)
 * - need to use other hooks for this to work in our React app
 *      - useState, useEffect, useCallback
 * - anything in the public folder will appear at the same level as our app, once it has been pushed up to a server
 *      - in preview, it's automatically taking care of that for you
 * - to React or to JavaScript and the browser, data.json will be in the same directory as everything else
 *
 * useEffect
 * - lets you perform 'side-effects' in function components
 *      - if you're familiar with how React life cycle methods used to work
 *          - think of useEffect as the component did mount, component did update, and component will unmount
 * - perfect for data searching operations and manually changing the DOM when certain components are a result of these operations
 * - this is how we're going to import our content from the state of the json file
 *
 * useState
 * - start with useState variables for our appointment list with empty array as initial value
 *
 * JavaScript fetch API
 * - allows us to retrieve an element either from a local file or from a server
 * - take care of getting the data, then issue a promise
 *      - our data will be retrieved and we will receive a response from the server we are asking the data from
 *          - in this case, it will be our file directory
 *      - use arrow function to take response from server then convert it to JSON
 *          - bc when we normally receive data, it just comes back as text
 *      - then use another promise, create temp variable called data where we receive all the data
 *          - use setAppointmentList and pass through the process cata we received from the server
 * - optionally, can pass throught variables to track (but not used in this project)
 * - we're retrieving the data and asking useCallback to monitor any changes that happen to that data
 *
 * useEffect
 * - make sure that it is tracking the data and any changes to the data as it comes in
 * - side effect that your app doesn't normally worry about
 *      - similar to manually controlling React a little bit more
 * - issue the fetchData method then ask useEffect to track the fetching of data
 *      - if the data changes for some reason, useEffect will keep track of it and update our app automatically
 *
 * - create another piece of state for the query info
 * - create a place for query to go to the component, then the onQueryChange event to be trapped in the parent component
 *      - query will get passed along the local query variable
 *      - onQueryChange is going to receive something from the event, then use the setQuery method and pass along what we receive
 * - now modify the array that has the list of items
 *      - don't touch the origina array bc if user types input into the query field
 *      - limit just the display of what's shown on screen and not the actual array
 *
 * filteredAppointments
 * - create a separate array to show only filtered items by the query
 * - temp item variable, return, go through different fields
 * - for each item we're interested in searching through
 *      - make sure that it doesn't care uppercase/lowercase with JS method .toLowerCase()
 *      - .includes JS method to also take a look at the query and compare our petName to the query.toLowerCase jic
 * - whenever we are mapping the appointmentList, change to map the filteredAppointments
 *
 * JavaScript sort()
 * - expects different variables usually a & b which allows to compare and do a simple sort based on the value of a & b
 * - create function that will take care of the order
 */

function App() {
  let [appointmentList, setAppointmentList] = useState([]);
  let [query, setQuery] = useState('');
  let [sortBy, setSortBy] = useState('petName');
  let [orderBy, setOrderBy] = useState('asc');

  const filteredAppointments = appointmentList
    .filter((item) => {
      return (
        item.petName.toLowerCase().includes(query.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLowerCase())
      );
    })
    .sort((a, b) => {
      let order = orderBy === 'asc' ? 1 : -1;
      return a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
        ? -1 * order
        : 1 * order;
    });

  const fetchData = useCallback(() => {
    fetch('./data.json')
      .then((response) => response.json())
      .then((data) => {
        setAppointmentList(data);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className='App container mx-auto mt-3 font-thin'>
      <h1 className='text-5xl mb-3'>
        <BiCalendar className='inline-block text-red-400 align-top' />
        Your Appointments
      </h1>
      <AddAppointment
        onSendAppointment={(myAppointment) =>
          setAppointmentList([...appointmentList, myAppointment])
        }
        lastId={appointmentList.reduce(
          (max, item) => (Number(item.id) > max ? Number(item.id) : max),
          0
        )}
      />
      <Search
        query={query}
        onQueryChange={(myQuery) => setQuery(myQuery)}
        orderBy={orderBy}
        onOrderByChange={(mySort) => setOrderBy(mySort)}
        sortBy={sortBy}
        onSortByChange={(mySort) => setSortBy(mySort)}
      />

      <ul className='divide-y divide-gray-200'>
        {filteredAppointments.map((appointment) => (
          <AppointmentInfo
            key={appointment.id}
            appointment={appointment}
            onDeleteAppointment={(appointmentId) =>
              setAppointmentList(
                appointmentList.filter(
                  (appointment) => appointment.id !== appointmentId
                )
              )
            }
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
