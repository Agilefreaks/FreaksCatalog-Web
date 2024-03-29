import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import FadeTransition from '../../components/AnimatedPages/FadeTransition';
import ConfirmDeleteModal from '../../components/ConfirmDeleteModal/ConfirmDeleteModal';
import EditFreakModal from '../../components/EditFreakModal/EditFreakModal';
import FreakDetails from '../../components/FreakDetails/FreakDetails';
import FreaksQueries from '../../graphql/queries/freaks';
import './ViewFreakPage.scss';

function useQueryParams() {
  return new URLSearchParams(useLocation().search);
}

const modals = {
  EDIT: 'editFreak',
  NONE: '',
  DELETE: 'deleteFreak',
};

function ViewFreakPage() {
  const query = useQueryParams();
  const editQueryParam = query.get('edit');
  const initialModalState = editQueryParam === '' ? modals.EDIT : modals.NONE;

  const [ openModal, setOpenModal ] = useState(initialModalState);

  const { id } = useParams();

  const { loading, error, refetch, data } = useQuery(FreaksQueries.getFreak(id));

  const history = useHistory();

  const handleSubmit = () => {
    refetch();
    setOpenModal(modals.NONE);
  };

  useEffect(() => {
    const editModalIsOpen = openModal === modals.EDIT;
    const newUrl = editModalIsOpen ? `/freaks/${ id }?edit` : `/freaks/${ id }`;

    history.replace(newUrl);
  }, [ openModal ]);

  const deleteMessage = (
    <div>
      <h1>Warning!</h1>
      <p>Are you sure you want to delete this freak?</p>
    </div>
  );

  if (loading) return <p>Loading</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  const { freak } = data;
  return (
    <FadeTransition>
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
            deleteMessage={ deleteMessage }
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
            onSubmit={ handleSubmit }
          />
        </div>
      </div>
    </FadeTransition>
  );
}

export default ViewFreakPage;
