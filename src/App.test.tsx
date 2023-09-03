import { render, screen } from '@testing-library/react';
import App from './App';
import { nanoid } from "nanoid"

test('Renders main page correctly', async () => {
  render(<App />);
  const buttonCount = await screen.findByRole('button');
 // const id = nanoid();
//  console.log(id)
  expect(buttonCount.innerHTML).toBe('count is 0');
  //expect(true).toBeTruthy();
});