import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import FilterModal from '../../components/FilterModal/FilterModal';
import skills from '../../mock-data/skills.json';
import freaks from '../../mock-data/freaks.json';
import projects from '../../mock-data/projects.json';
import FreaksGrid from '../../components/FreaksGrid/FreaksGrid';
import AddFreakModal from '../../components/AddFreakModal/AddFreakModal';
import './ViewFreaks.scss';

const modals = {
  SKILLS: 'skills',
  PROJECTS: 'projects',
  ADD: 'addFreak',
};

function ViewFreaks() {
  const [ openModal, setOpenModal ] = useState(null);

  return (
    <div className="home">
      <div className="home__filter-nav">
        <button
          className="home__button"
          type="button"
          onClick={ () => setOpenModal(modals.SKILLS) }
        >
          Skills
        </button>
        <FilterModal
          title="Skills"
          isOpen={ openModal === modals.SKILLS }
          keywords={ skills.skills }
          onClose={ () => setOpenModal(null) }
        />
        <button
          className="home__button"
          type="button"
          onClick={ () => setOpenModal(modals.PROJECTS) }
        >
          Projects
        </button>
        <FilterModal
          title="Projects"
          isOpen={ openModal === modals.PROJECTS }
          keywords={ projects.projects }
          onClose={ () => setOpenModal(null) }
        />
      </div>
      <div className="home__tiles-content">
        <FreaksGrid freaks={ freaks.freaks } />
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
