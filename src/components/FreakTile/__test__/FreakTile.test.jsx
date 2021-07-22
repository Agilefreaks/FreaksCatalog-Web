import React from 'react';
import { render, screen } from '@testing-library/react';
import FreakTile from '../FreakTile';

describe('FreakTile', () => {
  it('should render the freak tile', () => {
    render(<FreakTile id={ 5 } picture="some-url" name="name" />);

    expect(screen.getByTestId('freak-tile')).toBeInTheDocument();
  });

  it('should render the tile as a hyperlink', () => {
    const id = 6;
    render(<FreakTile id={ id } picture="some-url" name="name" />);

    expect(screen.getByTestId('freak-tile')).toHaveAttribute('href', `/freaks/${ id }`);
  });

  it('should render a name on the tile', () => {
    render(<FreakTile id={ 5 } picture="some-url" name="name" />);

    expect(screen.getByTestId('freak-name')).toHaveTextContent('name');
  });

  it('should render a picture for the tile', () => {
    render(<FreakTile id={ 5 } picture="some-url" name="name" />);

    expect(screen.getByTestId('freak-picture')).toHaveAttribute('src', 'some-url');
  });
});
