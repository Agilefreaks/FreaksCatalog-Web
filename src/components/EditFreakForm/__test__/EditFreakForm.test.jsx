import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EditFreakForm from '../EditFreakForm';
import { FreakModelDefault, FreakModelKeys } from '../../../models/freaks';

describe('EditFreakForm', () => {
  const onChange = jest.fn();

  beforeEach(() => {
    onChange.mockReset();
  });

  it('should trigger onChange when the firstName is changed', () => {
    render(
      <EditFreakForm
        onChange={ onChange }
      />,
    );

    const firstNameInput = screen.getByTestId('first-name-input');
    expect(firstNameInput).toBeInTheDocument();

    fireEvent.change(firstNameInput, { target: { value: 'Marian' } });

    expect(onChange).toBeCalledWith({
      ...FreakModelDefault,
      [FreakModelKeys.firstName]: 'Marian',
    });
  });

  it('should trigger onChange when the lastName is changed', () => {
    render(
      <EditFreakForm
        onChange={ onChange }
      />,
    );

    const lastNameInput = screen.getByTestId('last-name-input');

    fireEvent.change(lastNameInput, { target: { value: 'Badea' } });

    expect(onChange).toBeCalledWith({
      ...FreakModelDefault,
      [FreakModelKeys.lastName]: 'Badea',
    });
  });

  it('should receive a freak and display its data', () => {
    const freak = {
      description: '',
      email: '',
      firstName: '',
      lastname: 'Badea',
      level: '',
      norm: '',
      role: '',
      skills: '',
    };

    render(
      <EditFreakForm
        freak={ freak }
        onChange={ onChange }
      />,
    );

    const lastNameInput = screen.getByTestId('last-name-input');
    console.log(freak.lastname);
    expect(lastNameInput).toHaveTextContent('');
  });

  /* it('should trigger onChange when the firstName is changed', () => {
    const freak = {
      // put the freak data
    };

    render(
      <EditFreakForm
        freak={ freak }
        onChange={ onChange }
      />,
    );

    const firstNameInput = screen.getByTestId('first-name-input');

    expect(firstNameInput).toHaveTextContent(freak.firstName);

    fireEvent.change(firstNameInput, { target: { value: 'Luis' } });

    expect(firstNameInput).toHaveTextContent('Luis');
    expect(onChange).toBeCalledWith({
      ...freak,
      [FreakModelKeys.firstName]: 'Luis',
    });
  }); */
});
