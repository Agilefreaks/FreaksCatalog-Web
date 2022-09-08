import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import QueryFilterModal from '../../components/QueryFilterModal/QueryFilterModal';
import FreaksGrid from '../../components/FreaksGrid/FreaksGrid';
import AddFreakModal from '../../components/AddFreakModal/AddFreakModal';
import './ViewFreaks.scss';
import FreaksQueries from '../../graphql/queries/freaks';

const modals = {
  SKILLS: 'skills',
  PROJECTS: 'projects',
  ADD: 'addFreak',
};

function ViewFreaks() {
  const [ openModal, setOpenModal ] = useState(null);

  const { loading, error, data } = useQuery(FreaksQueries.getAll());

  if (loading) return <p>Loading</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  const freaks = data.freaks.nodes;
  const { technologies, projects } = data;

  return (
    <div className="view-freaks">
      <div className="view-freaks__filter-nav">
        <QueryFilterModal
          title="Skills"
          keywords={ technologies }
          modalId={ modals.SKILLS }
          isOpen={ openModal === modals.SKILLS }
          setOpenModal={ setOpenModal }
        />
        <QueryFilterModal
          title="Projects"
          keywords={ projects }
          modalId={ modals.PROJECTS }
          isOpen={ openModal === modals.PROJECTS }
          setOpenModal={ setOpenModal }
        />
      </div>
      <div className="view-freaks__tiles-content">
        <FreaksGrid freaks={ freaks } />
        <Button
          className="button-add-user"
          variant="outline-secondary"
          onClick={ () => setOpenModal(modals.ADD) }
        >
          <FontAwesomeIcon icon="user-plus" />
        </Button>
        <AddFreakModal
          title="Add Freak"
          isOpen={ openModal === modals.ADD }
          onClose={ () => setOpenModal(null) }
        />
      </div>
    </div>
  );
}

export default ViewFreaks;
