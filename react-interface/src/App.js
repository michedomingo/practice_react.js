import { BiCalendar } from 'react-icons/bi';
import Search from './components/Search';
import AddAppointment from './components/AddAppointment';
import AppointmentInfo from './components/AppointmentInfo';
import appointmentList from './data.json';

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
 *
 * <BiCalendar /> - call icon component as a HTML tag with properties
 *
 * divide-y: show dividers in between the different items vertically
 *
 * appointmentList - use variable with map function to create a temp variable called appointment for each of the items as they come in
 *      - use arrow function then parenthesis which will be what gets returned from this appointmentList and replaced instead of the expression
 *      - bringing in JSON data can go straight into a variable that can be used with regular JavaScript to map a series of HTML/JSX into the variable and display list easily with dot notation/jsx
 *
 * AppointmentInfo
 * use a key when looping through a series of elemments
 * - destructuring: pass along info through appointment variable, received through AppointmentInfo component
 *      - pass different variables/objects/events, makes it easier to breakdown compnents into pieces
 */

function App() {
  return (
    <div className='App container mx-auto mt-3 font-thin'>
      <h1 className='text-5xl mb-3'>
        <BiCalendar className='inline-block text-red-400 align-top' />
        Your Appointments
      </h1>
      <AddAppointment />
      <Search />

      <ul className='divide-y divide-gray-200'>
        {appointmentList.map((appointment) => (
          <AppointmentInfo key={appointment.id} appointment={appointment} />
        ))}
      </ul>
    </div>
  );
}

export default App;
