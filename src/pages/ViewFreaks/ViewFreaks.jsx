import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import FilterModal from '../../components/FilterModal/FilterModal';
import { skills } from '../../mock-data/skills.json';
import { projects } from '../../mock-data/projects.json';
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

  const { loading, error, data } = useQuery(FreaksQueries.getAll);
  console.log({ data });

  let result;

  if (loading) {
    result = (<h1>Loading...</h1>);
  } else if (error) {
    result = (<h1>Error</h1>);
  } else {
    console.log(data.freaks.nodes);
    const freaks = data.freaks.nodes;
    result = (
      <div className="view-freaks">
        <div className="view-freaks__filter-nav">
          <button
            className="view-freaks__button"
            type="button"
            onClick={ () => setOpenModal(modals.SKILLS) }
          >
            Skills
          </button>
          <FilterModal
            title="Skills"
            isOpen={ openModal === modals.SKILLS }
            keywords={ skills }
            onClose={ () => setOpenModal(null) }
          />
          <button
            className="view-freaks__button"
            type="button"
            onClick={ () => setOpenModal(modals.PROJECTS) }
          >
            Projects
          </button>
          <FilterModal
            title="Projects"
            isOpen={ openModal === modals.PROJECTS }
            keywords={ projects }
            onClose={ () => setOpenModal(null) }
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

  return result;
}

export default ViewFreaks;
