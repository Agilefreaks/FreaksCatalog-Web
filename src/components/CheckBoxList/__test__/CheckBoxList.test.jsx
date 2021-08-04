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
    expect(keywords).toEqual(expect.arrayContaining(keywords));
  });
});
