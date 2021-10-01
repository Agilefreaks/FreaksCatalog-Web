/* eslint-disable react/prop-types */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EditFreakForm from '../EditFreakForm';
import { FreakModelDefault, FreakModelKeys } from '../../../models/freak';

jest.mock('react-select', () => ({ options, value, onChange, testid, multiple }) => {
  function handleChange(event) {
    const option = options.filter(
      (element) => element.value === event.currentTarget.value,
    );
    onChange(option);
  }

  return (
    <select data-testid={ testid } value={ value } multiple={ multiple } onChange={ handleChange }>
      { options.map(({ label, value: val }) => (
        <option key={ val } value={ val }>
          { label }
        </option>
      )) }
    </select>
  );
});

jest.mock('@apollo/client', () => ({
  ...jest.requireActual('@apollo/client'),
  useQuery: () => ({
    loading: false,
    error: false,
    data: {
      technologies: [
        {
          id: 'javascript',
          name: 'Javascript',
        },
        {
          id: 'elm',
          name: 'Elm',
        },
      ],
    },
  }),
}));

describe('EditFreakForm', () => {
  const onChange = jest.fn();
  const onSubmit = jest.fn();

  const freak = {
    [FreakModelKeys.firstName]: 'Marian',
    [FreakModelKeys.lastName]: 'Badea',
    [FreakModelKeys.email]: 'badea@email.com',
    [FreakModelKeys.description]: 'I am Marian',
    [FreakModelKeys.role]: { id: 'Frontend', value: 'Frontend' },
    [FreakModelKeys.level]: { id: 'Novice', value: 'Novice' },
    [FreakModelKeys.norm]: { id: 'Full time', value: 'Full time' },
    [FreakModelKeys.technologies]: [ { id: 1, value: 'js', name: 'JS' } ],
  };

  beforeEach(() => {
    onChange.mockReset();
  });
  it('should trigger onChange when the firstName is changed', () => {
    render(
      <EditFreakForm
        onChange={ onChange }
        onSubmit={ onSubmit }
      />,
    );

    const firstNameInput = screen.getByTestId('first-name-input');

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
        onSubmit={ onSubmit }
      />,
    );

    const lastNameInput = screen.getByTestId('last-name-input');

    fireEvent.change(lastNameInput, { target: { value: 'Badea' } });

    expect(onChange).toBeCalledWith({
      ...FreakModelDefault,
      [FreakModelKeys.lastName]: 'Badea',
    });
  });

  it('should trigger onChange when the email is changed', () => {
    render(
      <EditFreakForm
        onChange={ onChange }
        onSubmit={ onSubmit }
      />,
    );

    const emailInput = screen.getByTestId('email-input');

    fireEvent.change(emailInput, { target: { value: 'badea@email.com' } });

    expect(onChange).toBeCalledWith({
      ...FreakModelDefault,
      [FreakModelKeys.email]: 'badea@email.com',
    });
  });

  it('should trigger onChange when the description is changed', () => {
    render(
      <EditFreakForm
        onChange={ onChange }
        onSubmit={ onSubmit }
      />,
    );

    const descriptionInput = screen.getByTestId('description-input');

    fireEvent.change(descriptionInput, { target: { value: 'I am Marian' } });

    expect(onChange).toBeCalledWith({
      ...FreakModelDefault,
      [FreakModelKeys.description]: 'I am Marian',
    });
  });
  it('should trigger onChange when the role is changed', () => {
    render(
      <EditFreakForm
        onChange={ onChange }
        onSubmit={ onSubmit }
      />,
    );

    const roleInput = screen.queryByTestId('role-input');
    fireEvent.change(roleInput, { target: { value: '1' } });

    expect(onChange).toBeCalledWith({
      ...FreakModelDefault,
      [FreakModelKeys.role]: {
        id: '1',
      },
    });
  });

  it('should trigger onChange when the level is changed', () => {
    render(
      <EditFreakForm
        onChange={ onChange }
        onSubmit={ onSubmit }
      />,
    );

    const levelInput = screen.getByTestId('level-input');

    fireEvent.change(levelInput, { target: { value: '1' } });

    expect(onChange).toBeCalledWith({
      ...FreakModelDefault,
      [FreakModelKeys.level]: {
        id: '1',
      },
    });
  });

  it('should trigger onChange when the norm is changed', () => {
    render(
      <EditFreakForm
        onChange={ onChange }
        onSubmit={ onSubmit }
      />,
    );

    const normInput = screen.queryByTestId('norm-input');

    fireEvent.change(normInput, { target: { value: '1' } });

    expect(onChange).toBeCalledWith({
      ...FreakModelDefault,
      [FreakModelKeys.norm]: {
        id: '1',
      },
    });
  });

  it('should trigger onChange when the technologies is changed', () => {
    render(
      <EditFreakForm
        onChange={ onChange }
        onSubmit={ onSubmit }
      />,
    );

    const skillsInput = screen.getByTestId('skills-input');
    const newValue = { id: 'elm', name: 'Elm' };

    fireEvent.change(skillsInput, { target: { value: newValue.id } });

    expect(onChange).toHaveBeenCalledWith({
      ...FreakModelDefault,
      [FreakModelKeys.technologies]: [ newValue ],
    });
  });

  it('should receive a freak and display its data', () => {
    render(
      <EditFreakForm
        freak={ freak }
        onChange={ onChange }
        onSubmit={ onSubmit }
      />,
    );

    const lastNameInput = screen.getByTestId('last-name-input');
    expect(lastNameInput.value).toEqual(freak.lastName);
  });

  it('should display default data if not given any data', () => {
    render(
      <EditFreakForm
        onChange={ onChange }
        onSubmit={ onSubmit }
      />,
    );

    const lastNameInput = screen.getByTestId('last-name-input');
    expect(lastNameInput.value).toEqual('');
  });

  it('should trigger onChange when there is an update, and it gives the entry data with the new change', () => {
    render(
      <EditFreakForm
        freak={ freak }
        onChange={ onChange }
        onSubmit={ onSubmit }
      />,
    );

    const firstNameInput = screen.getByTestId('first-name-input');
    expect(firstNameInput.value).toEqual(freak.firstName);

    fireEvent.change(firstNameInput, { target: { value: 'Luis' } });

    expect(onChange).toBeCalledWith({
      ...freak,
      [FreakModelKeys.firstName]: 'Luis',
    });
  });
});
