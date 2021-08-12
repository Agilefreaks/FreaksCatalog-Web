import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EditFreakForm from '../EditFreakForm';
import { FreakModelDefault, FreakModelKeys } from '../../../models/freaks';
// import userEvent from '@testing-library/user-event';

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
  it('should trigger onChange when the role is changed', async () => {
    render(
      <EditFreakForm
        onChange={ onChange }
      />,
    );

    const roleInput = screen.queryByTestId('role-input');

    // expect(onChange).toHaveBeenCalledTimes(0);

    fireEvent.click(roleInput);
    const founderOption = screen.getByText('Founder');
    fireEvent.click(founderOption);
    expect(onChange).toHaveBeenCalledTimes(1);
    /* expect(onChange).toBeCalledWith({
      ...FreakModelDefault,
      [FreakModelKeys.role]: 'Founder',
    }); */
  });

  it('should trigger onChange when the level is changed', () => {
    render(
      <EditFreakForm
        onChange={ onChange }
      />,
    );

    const levelInput = screen.getByTestId('level-input');

    fireEvent.change(levelInput, { target: { value: 'Novice' } });

    expect(onChange).toBeCalledWith({
      ...FreakModelDefault,
      [FreakModelKeys.level]: 'Novice',
    });
  });

  it('should trigger onChange when the norm is changed', () => {
    render(
      <EditFreakForm
        onChange={ onChange }
      />,
    );

    const normInput = screen.getByTestId('norm-input');

    fireEvent.change(normInput, { target: { value: 'Full time' } });

    expect(onChange).toBeCalledWith({
      ...FreakModelDefault,
      [FreakModelKeys.norm]: 'Full time',
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

  it('should trigger onChange when the firstName is changed', () => {
    render(
      <EditFreakForm
        freak={ freak }
        onChange={ onChange }
      />,
    );

    const firstNameInput = screen.getByTestId('first-name-input');
    expect(firstNameInput.value).toEqual(freak.firstName);

    fireEvent.change(firstNameInput, { target: { value: 'Luis' } });

    expect(firstNameInput.value).toEqual(freak.firstName);
    expect(onChange).toBeCalledWith({
      ...freak,
      [FreakModelKeys.firstName]: 'Luis',
    });
  });
});
