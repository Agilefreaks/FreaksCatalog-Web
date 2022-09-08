import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ViewFreakPage from '../ViewFreakPage';
import { FreakModelKeys } from '../../../models/freak';
import '@testing-library/jest-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: 1 }),
  useLocation: () => ({ search: 'edit' }),
}));

jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: () => <div />,
}));

describe('ViewFreakPage', () => {
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
      <BrowserRouter>
        <ViewFreakPage freak={ freak } />
      </BrowserRouter>,
    );
    const freakDetails = screen.getByTestId('view-freak');
    expect(freakDetails).toBeInTheDocument();
  });

  it('should render an delete button for the freak', () => {
    render(
      <BrowserRouter>
        <ViewFreakPage freak={ freak } />
      </BrowserRouter>,
    );
    const freakDeleteButton = screen.getByTestId('view-freak-delete-button');
    expect(freakDeleteButton).toBeInTheDocument();
  });

  it('should render an edit button for the freak', () => {
    render(
      <BrowserRouter>
        <ViewFreakPage freak={ freak } />
      </BrowserRouter>,
    );
    const freakEditButton = screen.getByTestId('view-freak-edit-button');
    expect(freakEditButton).toBeInTheDocument();
  });
});
