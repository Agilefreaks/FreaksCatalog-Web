import React from 'react';
import { render, screen } from '@testing-library/react';
import ViewFreakPage from '../ViewFreakPage';
import { FreakModelKeys } from '../../../models/freak';
import '@testing-library/jest-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn().mockReturnValue({ environment: 'dev', service: 'fakeService' }),
}));
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
  it('should render a page with freak details', () => {
    render(
      <ViewFreakPage freak={ freak } />,
    );
    const freakDetails = screen.getByTestId('view-freak');
    expect(freakDetails).toBeInTheDocument();
  });
  it('should render an delete button for the freak', () => {
    render(
      <ViewFreakPage freak={ freak } />,
    );
    const freakDeleteButton = screen.getByTestId('view-freak-delete-button');
    expect(freakDeleteButton).toBeInTheDocument();
  });
  it('should render an edit button for the freak', () => {
    render(
      <ViewFreakPage freak={ freak } />,
    );
    const freakEditButton = screen.getByTestId('view-freak-edit-button');
    expect(freakEditButton).toBeInTheDocument();
  });
});
