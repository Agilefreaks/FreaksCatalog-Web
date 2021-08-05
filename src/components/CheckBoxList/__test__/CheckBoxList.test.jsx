import React from 'react';
import { render } from '@testing-library/react';
import CheckBoxList from '../CheckBoxList';

describe('CheckBoxList', () => {
  it('should render a list of keywords', () => {
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

    // find the elements CheckBoxItem and compare the number of elements
    // agsint the number o keywords given
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
    // 2. simulate a change on a Item
    // 3. verify that onChange was called with the correct parameters
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
    // 2. simulate a change on a Item
    // 3. verify that onChange was called with the correct parameters

    expect(onChange).toHaveBeenCalledWith([], 'Kotlin', false);
  });
});
