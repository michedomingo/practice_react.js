import { render } from '@testing-library/react';
// `render` component - allows assertion tests; to determine whether specific web content is displayed on a webpage
import React from 'react';
import App from './App';

/**
 *
 *  Testing Library
 * - test utility that is a part of Create React App
 * - useful test library used w/ React or outside of React
 * - helps to render elements to test the output to match expectations
 * - a query reaches out to some sort of element and return info about it
 * - write tests to make sure components are rendering properly
 * -
 *
 */

test('renders an h1', () => {
  const { getByText } = render(<App />);
  const h1 = getByText(/Hello React Testing Library/);
  expect(h1).toHaveTextContent('Hello React Testing Library');
});
