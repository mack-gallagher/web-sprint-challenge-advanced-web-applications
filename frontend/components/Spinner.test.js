import Spinner from './Spinner';
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
test('sanity', () => {
  expect(true).toBe(true)
})

test('renders without errors', () => {
  const wrapper = render(<Spinner on={false} />);
})

test('when spinner is off, it does not show up', () => {
  const wrapper = render(<Spinner on={false} />);
  expect(wrapper.queryByText(/Please wait/i)).not.toBeInTheDocument();
})

test('when spinner is on, it does show up', () => {
  const wrapper = render(<Spinner on={true} />);
  expect(wrapper.queryByText(/Please wait/i)).toBeInTheDocument();
})
