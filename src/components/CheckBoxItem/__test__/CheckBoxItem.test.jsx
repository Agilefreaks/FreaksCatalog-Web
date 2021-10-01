import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CheckBoxItem from '../CheckBoxItem';

describe('CheckBoxItem', () => {
  it('should toggle an input by selecting checkbox', () => {
    const name = 'Kotlin';
    const id = '1';
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

    const input = screen.getByTestId('checkbox-input');

    expect(input.checked).toBe(true);

    fireEvent.click(input);

    expect(onChange).toHaveBeenCalled();
  });
});
