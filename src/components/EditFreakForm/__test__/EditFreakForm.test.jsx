import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EditFreakForm from '../EditFreakForm';
import { FreakModelDefault, FreakModelKeys } from '../../../models/freaks';

describe('EditFreakForm', () => {
  const onChange = jest.fn();

  const freak = {
    [FreakModelKeys.firstName]: 'Marian',
    [FreakModelKeys.lastName]: 'Badea',
    [FreakModelKeys.email]: 'badea@email.com',
    [FreakModelKeys.description]: 'I am Marian',
    [FreakModelKeys.role]: 'Frontend',
    [FreakModelKeys.level]: 'Novice',
    [FreakModelKeys.norm]: 'Full time',
    [FreakModelKeys.skills]: 'JS',
  };

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

  it('should trigger onChange when the email is changed', () => {
    render(
      <EditFreakForm
        onChange={ onChange }
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
      />,
    );

    const roleInput = screen.queryByTestId('role-input');
    const roleOptions = screen.queryAllByTestId('role-option');
    const secondOptionText = roleOptions[1].textContent;

    fireEvent.change(roleInput, { target: { value: secondOptionText } });

    expect(onChange).toBeCalledWith({
      ...FreakModelDefault,
      [FreakModelKeys.role]: secondOptionText,
    });
  });

  it('should trigger onChange when the level is changed with one of the options', () => {
    render(
      <EditFreakForm
        onChange={ onChange }
      />,
    );

    const levelInput = screen.queryByTestId('level-input');
    const levelOptions = screen.queryAllByTestId('level-option');
    const fifthOptionText = levelOptions[5].textContent;

    fireEvent.change(levelInput, { target: { value: fifthOptionText } });

    expect(onChange).toBeCalledWith({
      ...FreakModelDefault,
      [FreakModelKeys.level]: fifthOptionText,
    });
  });

  it('should trigger onChange when the level is changed', () => {
    render(
      <EditFreakForm
        onChange={ onChange }
      />,
    );

    const levelInput = screen.getByTestId('level-input');

    fireEvent.change(levelInput, { target: { value: 'Advanced' } });

    expect(onChange).toBeCalledWith({
      ...FreakModelDefault,
      [FreakModelKeys.level]: 'Advanced',
    });
  });

  it('should trigger onChange when the norm is changed', () => {
    render(
      <EditFreakForm
        onChange={ onChange }
      />,
    );

    const normInput = screen.queryByTestId('norm-input');
    const normOptions = screen.queryAllByTestId('norm-option');
    const thirdOptionText = normOptions[2].textContent;

    fireEvent.change(normInput, { target: { value: thirdOptionText } });

    expect(onChange).toBeCalledWith({
      ...FreakModelDefault,
      [FreakModelKeys.norm]: thirdOptionText,
    });
  });

  it('should trigger onChange when the skills is changed', () => {
    render(
      <EditFreakForm
        onChange={ onChange }
      />,
    );

    const skillsInput = screen.getByTestId('skills-input');

    fireEvent.change(skillsInput, { target: { value: 'Elm' } });

    expect(onChange).toBeCalledWith({
      ...FreakModelDefault,
      [FreakModelKeys.skills]: 'Elm',
    });
  });

  it('should receive a freak and display its data', () => {
    render(
      <EditFreakForm
        freak={ freak }
        onChange={ onChange }
      />,
    );

    const lastNameInput = screen.getByTestId('last-name-input');
    expect(lastNameInput.value).toEqual(freak.lastName);
  });

  it('should display default data if not given any data', () => {
    render(
      <EditFreakForm
        onChange={ onChange }
      />,
    );

    const lastNameInput = screen.getByTestId('last-name-input');
    expect(lastNameInput.value).toEqual('');
  });

  it('should trigger onChange when the firstName is given some data', () => {
    render(
      <EditFreakForm
        freak={ freak }
        onChange={ onChange }
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
