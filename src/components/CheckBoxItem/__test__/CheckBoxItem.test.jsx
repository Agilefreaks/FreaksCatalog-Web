import React from 'react';
import { render, screen } from '@testing-library/react';
import CheckBoxItem from '../CheckBoxItem';

describe('CheckBoxItem', () => {
  it('should render a input with a type of checkbox', () => {
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

    expect(screen.getByTestId('checkbox-input')).toHaveAttribute('type', checkbox);
  });
});
