import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ViewFreakPage from '../ViewFreakPage';
import '@testing-library/jest-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: 1 }),
  useLocation: () => ({ search: 'edit' }),
}));

jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: () => <div />,
}));

jest.mock('@apollo/client', () => ({
  ...jest.requireActual('@apollo/client'),
  useMutation: () => [
    () => {},
    {
      loading: false,
      error: false,
    },
  ],
  useQuery: () => ({
    loading: false,
    error: false,
    refetch: () => {},
    data: {
      freak: {
        firstName: 'Marian',
        lastName: 'Badea',
        email: 'badea@email.com',
        photo: {
          uri: 'https://d30anih4i5atxe.cloudfront.net/uploads/bc2a1f67-7297-4ad4-ba62-d70042ad43cc.png',
        },
        description: 'I am Marian',
        role: { id: 'frontend', name: 'Frontend' },
        level: { id: 'Novice', name: 'Novice' },
        norm: { id: 'Full time', name: 'Full time' },
        technologies: [
          { id: 1, value: 'js', name: 'JS' },
          { id: 2, value: 'elm', name: 'Elm' },
        ],
        projects: [ { value: 'epix', name: 'EPIX' } ],
      },
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

describe('ViewFreakPage', () => {
  it('should render a page with freak details', () => {
    render(
      <BrowserRouter>
        <ViewFreakPage />
      </BrowserRouter>,
    );
    const freakDetails = screen.getByTestId('view-freak');
    expect(freakDetails).toBeInTheDocument();
  });

  it('should render an delete button for the freak', () => {
    render(
      <BrowserRouter>
        <ViewFreakPage />
      </BrowserRouter>,
    );
    const freakDeleteButton = screen.getByTestId('view-freak-delete-button');
    expect(freakDeleteButton).toBeInTheDocument();
  });

  it('should render an edit button for the freak', () => {
    render(
      <BrowserRouter>
        <ViewFreakPage />
      </BrowserRouter>,
    );
    const freakEditButton = screen.getByTestId('view-freak-edit-button');
    expect(freakEditButton).toBeInTheDocument();
  });
});
