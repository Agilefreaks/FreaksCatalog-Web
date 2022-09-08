import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CheckBoxList from '../CheckBoxList';

describe('CheckBoxList', () => {
  const keywords = [
    { id: '1', name: 'Kotlin' },
    { id: '2', name: 'Elm' },
    { id: '3', name: 'Elm' },
  ];
  const onChange = jest.fn();

  beforeEach(() => {
    onChange.mockReset();
  });

  it('should render a list of keywords', () => {
    const checkedState = [];

    render(
      <CheckBoxList
        checkedState={ checkedState }
        onChange={ onChange }
        keywords={ keywords }
      />,
    );

    const elements = screen.queryAllByTestId('checkbox-input');

    expect(elements.length).toBe(keywords.length);
  });

  it('should trigger an event when a Item is clicked that selects the item', () => {
    const checkedState = [];

    render(
      <CheckBoxList
        checkedState={ checkedState }
        onChange={ onChange }
        keywords={ keywords }
      />,
    );

    const elements = screen.queryAllByTestId('checkbox-input');

    fireEvent.click(elements[0]);

    expect(onChange).toHaveBeenCalledWith([ 'Kotlin' ], 'Kotlin', true);
  });

  it('should render the checkboxes as selected depending on the checkedState', () => {
    const checkedState = [ 'Elm' ];

    render(
      <CheckBoxList
        checkedState={ checkedState }
        onChange={ onChange }
        keywords={ keywords }
      />,
    );

    const elements = screen.queryAllByTestId('checkbox-input');

    expect(elements[0].checked).toEqual(false);
    expect(elements[1].checked).toEqual(true);
  });

  it('should trigger an event when a Item is clicked that unselects the item', () => {
    const checkedState = [ 'Kotlin' ];

    render(
      <CheckBoxList
        checkedState={ checkedState }
        onChange={ onChange }
        keywords={ keywords }
      />,
    );

    const elements = screen.queryAllByTestId('checkbox-input');

    fireEvent.click(elements[0]);

    expect(onChange).toHaveBeenCalledWith([], 'Kotlin', false);
  });
});
