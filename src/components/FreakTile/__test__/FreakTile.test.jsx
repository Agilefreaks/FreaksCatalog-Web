import React from 'react';
import { render, screen } from '@testing-library/react';
import FreakTile from '../FreakTile';

describe('FreakTile', () => {
  it('should render the freak tile', () => {
    render(<FreakTile id={ 5 } picture="some-url" name="naruto" />);

    expect(screen.getByTestId('freak-tile')).toBeInTheDocument();
  });

  it('should render an hyperlink to the freak page', () => {
    const id = 6;
    render(<FreakTile id={ id } picture="some-url" name="naruto" />);

    expect(screen.getByTestId('freak-tile')).toHaveAttribute('href', `/freaks/${ id }`);
  });
});
