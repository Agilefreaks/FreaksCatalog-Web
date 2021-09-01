import React from 'react';
import { render, screen } from '@testing-library/react';
import FreakDetails from '../FreakDetails';
import { FreakModelKeys } from '../../../models/freak';
import '@testing-library/jest-dom';

describe('FreakDetails', () => {
  const freak = {
    [FreakModelKeys.firstName]: 'Marian',
    [FreakModelKeys.lastName]: 'Badea',
    [FreakModelKeys.email]: 'badea@email.com',
    [FreakModelKeys.picture]: 'https://d30anih4i5atxe.cloudfront.net/uploads/bc2a1f67-7297-4ad4-ba62-d70042ad43cc.png',
    [FreakModelKeys.description]: 'I am Marian',
    [FreakModelKeys.role]: 'Frontend',
    [FreakModelKeys.level]: 'Novice',
    [FreakModelKeys.norm]: 'Full time',
    [FreakModelKeys.skills]: [ { id: 1, value: 'js', name: 'JS' }, { id: 2, value: 'elm', name: 'Elm' } ],
    [FreakModelKeys.projects]: [ { value: 'epix', name: 'EPIX' } ],
  };

  it('should render the freak firstName and lastName', () => {
    render(
      <FreakDetails freak={ freak } />,
    );
    const freakName = screen.getByTestId('freak-name');
    expect(freakName).toHaveTextContent(`${ freak.firstName } ${ freak.lastName }`);
  });

  it('should render the freak picture', () => {
    render(
      <FreakDetails freak={ freak } />,
    );
    const freakPicture = screen.getByTestId('freak-img');
    expect(freakPicture).toHaveAttribute('src', freak.picture);
  });

  it('should render the freak role and the freak norm', () => {
    render(
      <FreakDetails freak={ freak } />,
    );
    const freakRole = screen.getByTestId('freak-role-norm');
    expect(freakRole).toHaveTextContent(`${ freak.role } - ${ freak.norm }`);
  });

  it('should render the freak description', () => {
    render(
      <FreakDetails freak={ freak } />,
    );
    const freakDescription = screen.getByTestId('freak-description');
    expect(freakDescription).toHaveTextContent(freak.description);
  });

  it('should render the freak skills', () => {
    render(
      <FreakDetails freak={ freak } />,
    );

    const freakSkills = screen.getByTestId('freak-skills');
    const skillNames = freak.skills.map((skill) => skill.name).join((', '));

    expect(freakSkills).toHaveTextContent(skillNames);
  });

  it('should render the freak projects', () => {
    render(
      <FreakDetails freak={ freak } />,
    );

    const freakProjects = screen.getByTestId('freak-projects');
    const projectNames = freak.projects.map((project) => project.name).join((', '));

    expect(freakProjects).toHaveTextContent(projectNames);
  });

  it('should render the freak level', () => {
    render(
      <FreakDetails freak={ freak } />,
    );
    const freakLevel = screen.getByTestId('freak-level');
    expect(freakLevel).toHaveTextContent(freak.level);
  });
});
