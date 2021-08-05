import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CheckBoxItem from '../CheckBoxItem';

describe('CheckBoxItem', () => {
  it('should trigger a change on the checkbox', () => {
    const name = 'Kotlin';
    const id = 1;
    const onChange = jest.fn();
    const isSelected = true;
    const checkbox = 'checkbox';

    render(
      <CheckBoxItem
        label={ name }
        name={ name }
        type={ checkbox }
        id={ id }
        onChange={ onChange }
        isSelected={ isSelected }
      />,
    );

    // trigger a virtual change on the checkbox

    const input = screen.getByTestId('checkbox-input');

    expect(input).toBeInTheDocument();

    fireEvent.click(input);
    expect(input).toBeChecked();
    expect(onChange).toHaveBeenCalled();
  });
});
