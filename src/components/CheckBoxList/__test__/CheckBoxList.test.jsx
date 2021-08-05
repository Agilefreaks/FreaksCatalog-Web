import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CheckBoxList from '../CheckBoxList';

describe('CheckBoxList', () => {
  it('should render a list of keywords', () => {
    const onChange = jest.fn();
    const keywords = [ { id: 1, name: 'Kotlin' }, { id: 2, name: 'Elm' }, { id: 3, name: 'Elm' } ];
    const checkedState = [];

    render(
      <CheckBoxList
        checkedState={ checkedState }
        onChange={ onChange }
        keywords={ keywords }
      />,
    );

    // find the elements CheckBoxItem and compare the number of elements
    // agsint the number o keywords given
    const elements = screen.queryAllByTestId('checkbox-input');
    expect(elements.length).toBe(keywords.length);
  });

  it('should trigger an event when a Item is clicked that selects the item', () => {
    const onChange = jest.fn();
    const keywords = [ { id: 1, name: 'Kotlin' }, { id: 2, name: 'Elm' } ];
    const checkedState = [];

    render(
      <CheckBoxList
        checkedState={ checkedState }
        onChange={ onChange }
        keywords={ keywords }
      />,
    );

    // 1. render the the List
    const list = screen.queryByTestId('checkbox-list');

    expect(list).toBeInTheDocument();

    // 2. simulate a change on a Item
    const elements = screen.queryAllByTestId('checkbox-input');

    expect(elements[0]).toBeInTheDocument();
    fireEvent.click(elements[0]);
    expect(elements[0].checked).toEqual(false);

    // 3. verify that onChange was called with the correct parameters
    expect(onChange).toHaveBeenCalledWith([ 'Kotlin' ], 'Kotlin', true);
  });

  it('should trigger an event when a Item is clicked that unselects the item', () => {
    const onChange = jest.fn();
    const keywords = [ { id: 1, name: 'Kotlin' }, { id: 2, name: 'Elm' } ];
    const checkedState = [ 'Kotlin' ];

    render(
      <CheckBoxList
        checkedState={ checkedState }
        onChange={ onChange }
        keywords={ keywords }
      />,
    );

    // 1. render the the List
    const list = screen.queryByTestId('checkbox-list');

    expect(list).toBeInTheDocument();

    // 2. simulate a change on a Item
    const elements = screen.queryAllByTestId('checkbox-input');

    fireEvent.click(elements[0]);
    expect(elements[0].checked).toEqual(true);

    // 3. verify that onChange was called with the correct parameters
    expect(onChange).toHaveBeenCalledWith([], 'Kotlin', false);
  });
});
