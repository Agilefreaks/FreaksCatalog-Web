import React, { useState, useEffect, useMemo } from 'react';
import { Button } from 'react-bootstrap';
import { useParams, useHistory, useLocation, Link } from 'react-router-dom';
import freaks from '../../mock-data/freaks.json';
import FreakDetails from '../../components/FreakDetails/FreakDetails';
import './ViewFreakPage.scss';
import EditFreakModal from '../../components/EditFreakModal/EditFreakModal';
import ConfirmDeleteModal from '../../components/ConfirmDeleteModal/ConfirmDeleteModal';

function findFreak(id) {
  return (freak) => freak.id === id;
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const modals = {
  EDIT: 'editFreak',
  NONE: '',
  DELETE: 'deleteFreak',
};

function ViewFreakPage() {
  const query = useQuery();
  const editQueryParam = query.get('edit');
  const initialModalState = editQueryParam === '' ? modals.EDIT : modals.NONE;

  const [ openModal, setOpenModal ] = useState(initialModalState);

  const { id } = useParams();

  const history = useHistory();

  useEffect(() => {
    const editModalIsOpen = openModal === modals.EDIT;
    const newUrl = editModalIsOpen ? `/freaks/${ id }?edit` : `/freaks/${ id }`;

    history.replace(newUrl);
  }, [ openModal ]);

  const freak = useMemo(() => {
    const parsedId = parseInt(id, 10);

    return freaks.freaks.find(findFreak(parsedId));
  }, [ id ]);

  return (
    <div className="view-freak" data-testid="view-freak">
      <Link to="/freaks">
        <Button
          type="button"
          variant="default"
          className="btn btn-outline-secondary btn-sm m-3"
          data-testid="view-freak-back-button"
        >
          Back
        </Button>
      </Link>
      <FreakDetails freak={ freak } />
      <div className="view-freak__buttons">
        <Button
          type="button"
          className="btn btn-danger app-button -medium"
          data-testid="view-freak-delete-button"
          onClick={ () => setOpenModal(modals.DELETE) }
        >
          Delete
        </Button>
        <ConfirmDeleteModal
          freak={ freak }
          title="Delete Freak"
          isOpen={ openModal === modals.DELETE }
          onClose={ () => setOpenModal(modals.NONE) }
        />
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

export default ViewFreakPage;
