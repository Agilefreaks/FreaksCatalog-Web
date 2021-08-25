import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { freaks } from '../../mock-data/freaks.json';
import FreakDetails from '../../components/FreakDetails/FreakDetails';
import './ViewFreakPage.scss';
import EditFreakModal from '../../components/EditFreakModal/EditFreakModal';

function findFreak(id) {
  return (freak) => freak.id === id;
}

const modals = {
  EDIT: 'editFreak',
};

function ViewFreakPage() {
  const { id } = useParams();
  const parsedId = parseInt(id, 10);

  const [ openModal, setOpenModal ] = useState(null);

  const freak = freaks.find(findFreak(parsedId));

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
          onClick={ () => setOpenModal(modals.ADD) }
        >
          Edit
        </Button>
        <EditFreakModal
          freak={ freak }
          title="Edit Freak"
          isOpen={ openModal === modals.ADD }
          onClose={ () => setOpenModal(null) }
        />
      </div>
    </div>
  );
}

ViewFreakPage.propTypes = {
};

export default ViewFreakPage;
