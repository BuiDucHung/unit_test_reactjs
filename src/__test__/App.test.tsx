
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from '../App';;

test('increments count when the button is clicked', () => {
  const { getByText } = render(<App />);
  const incrementButton = getByText('Increment');
  const countText = getByText('Count: 0');

  fireEvent.click(incrementButton);
  expect(countText).toHaveTextContent('Count: 1');
});