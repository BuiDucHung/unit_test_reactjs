// import { render, screen } from '@testing-library/react';
// import App from "./App";

// import matchers from '@testing-library/jest-dom/matchers';
// expect.extend(matchers)

// it("displays thr correct title", () => {
//     render(<App/>);
//     const linkElement = screen.getByText(/Hello World/i);
//     expect(linkElement).toBeVisible();
// });
import { render, fireEvent } from '@testing-library/react';
import App from './App';;

test('increments count when the button is clicked', () => {
  const { getByText } = render(<App />);
  const incrementButton = getByText('Increment');
  const countText = getByText('Count: 0');

  fireEvent.click(incrementButton);

  expect(countText).toHaveTextContent('Count: 1');
});