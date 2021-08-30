import React from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { freaks } from '../../mock-data/freaks.json';
import FreakDetails from '../../components/FreakDetails/FreakDetails';
import './ViewFreakPage.scss';

function findFreak(id) {
  return (freak) => freak.id === id;
}

function ViewFreakPage() {
  let { id } = useParams();
  id = parseInt(id, 10);
  const freak = freaks.find(findFreak(id));

  return (
    <div className="view-freak" data-testid="view-freak">
      <FreakDetails freak={ freak } />
      <div className="view-freak__buttons">
        <Button
          type="button"
          className="btn btn-danger app-button -medium"
          data-testid="view-freak-delete-button"
        >
          Delete
        </Button>
        <Button
          type="button"
          className="btn btn-outline-secondary app-button -medium "
          variant="default"
          data-testid="view-freak-edit-button"
        >
          Edit
        </Button>
      </div>
    </div>
  );
}

ViewFreakPage.propTypes = {
};

export default ViewFreakPage;
