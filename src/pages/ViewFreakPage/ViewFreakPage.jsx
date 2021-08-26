import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { freaks } from '../../mock-data/freaks.json';
import FreakDetails from '../../components/FreakDetails/FreakDetails';
import './ViewFreakPage.scss';
import EditFreakModal from '../../components/EditFreakModal/EditFreakModal';

function findFreak(id) {
  return (freak) => freak.id === id;
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const modals = {
  EDIT: 'editFreak',
  NONE: '',
};

function ViewFreakPage() {
  const query = useQuery();
  const editQueryParam = query.get('edit');

  const [ openModal, setOpenModal ] = useState(modals.EDIT);

  const { id } = useParams();
  const parsedId = parseInt(id, 10);

  const history = useHistory();

  useEffect(() => {
    const editModalIsOpen = openModal === modals.EDIT;
    if (editModalIsOpen) {
      history.push(`/freaks/${ id }?edit`);
    } else {
      history.push(`/freaks/${ id }`);
    }
  }, [ openModal ]);

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
          onClick={ () => setOpenModal(modals.EDIT) }
        >
          Edit
        </Button>
        <EditFreakModal
          freak={ freak }
          title="Edit Freak"
          isOpen={ openModal === modals.EDIT }
          onClose={ () => setOpenModal(modals.NONE) }
        />
      </div>
    </div>
  );
}

ViewFreakPage.propTypes = {
};

export default ViewFreakPage;
