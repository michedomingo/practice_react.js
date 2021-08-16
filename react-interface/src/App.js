import { BiArchive } from 'react-icons/bi';

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
 */

function App() {
  return (
    <div className='App container mx-auto mt-3 font-thin'>
      <h1 className='text-5xl'>
        <BiArchive className='inline-block text-red-400 align-top' />
        Your Appointments
      </h1>
    </div>
  );
}

export default App;
