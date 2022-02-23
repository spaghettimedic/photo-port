import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..'

afterEach(cleanup);

describe('Contact component', () => {
  it('renders', () => {
    render(<Contact/>);
  });

  it('matches', () => {
    const { asFragment } = render(<Contact />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('title is correct', () => {
    const { getByTestId } = render(<Contact/>);
    expect(getByTestId('contacth1tag')).toHaveTextContent('Contact me');
    expect(getByTestId('submitbutton')).toHaveTextContent('Submit');
  });
});


