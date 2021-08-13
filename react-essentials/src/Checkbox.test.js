import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Checkbox } from './Checkbox.js';

/**
 * - pull { render, fireEvent } from @testing-library/react
 * - select checkbox bc /notchecked/ when our app first renders
 * - fireEvent on checkbox, click it and we expect the value of checkbox.checked to be true
 */

test('Selecting checkbox', () => {
  const { getByLabelText } = render(<Checkbox />);
  const checkbox = getByLabelText(/not checked/);

  // `fireEvent.click` method will simulate an end user clicking a checkbox on a webpage form
  // From there, you can write assertion tests
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
});
