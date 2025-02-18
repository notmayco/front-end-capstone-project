import { render, screen } from '@testing-library/react';
import BookingForms from './Components/BookingForms';

test('render label', () => {
  render(<BookingForms />);
  const label = screen.getbyText("Choose date");
  expect(label).toBeInTheDocument();
});
