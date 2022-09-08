import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import FreakTile from '../FreakTile';
import '@testing-library/jest-dom';

describe('FreakTile', () => {
  const id = '1';
  const photo = { uri: 'some-url' };
  const name = 'Anda';

  it('should render the freak tile', () => {
    render(
      <BrowserRouter>
        <FreakTile id={ id } photo={ photo } name={ name } />
      </BrowserRouter>,
    );

    expect(screen.getByTestId('freak-tile')).toBeInTheDocument();
  });

  it('should render the tile as a hyperlink', () => {
    render(
      <BrowserRouter>
        <FreakTile id={ id } photo={ photo } name={ name } />
      </BrowserRouter>,
    );

    expect(screen.getByTestId('freak-tile')).toHaveAttribute('href', `/freaks/${ id }`);
  });

  it('should render a name on the tile', () => {
    render(
      <BrowserRouter>
        <FreakTile id={ id } photo={ photo } name={ name } />
      </BrowserRouter>,
    );

    expect(screen.getByTestId('freak-name')).toHaveTextContent(name);
  });

  it('should render a picture for the tile', () => {
    render(
      <BrowserRouter>
        <FreakTile id={ id } photo={ photo } name={ name } />
      </BrowserRouter>,
    );

    expect(screen.getByTestId('freak-picture')).toHaveAttribute('src', photo.uri);
  });
});
