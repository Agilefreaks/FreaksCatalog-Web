import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import FreaksGrid from './components/FreaksGrid/FreaksGrid';
import { freaks } from './mock-data/freaks.json';
import { skills } from './mock-data/skills.json';
import { projects } from './mock-data/projects.json';
import './App.scss';
import './styles/button-add-user.scss';
import FilterModal from './components/FilterModal/FilterModal';
import AddFreakModal from './components/AddFreakModal/AddFreakModal';

library.add(faTimes, faUserPlus);

const modals = {
  SKILLS: 'skills',
  PROJECTS: 'projects',
  ADD: 'addFreak',
};

function App() {
  const [ openModal, setOpenModal ] = useState(null);

  return (
    <div className="app">
      <div>
        <button
          className="app__button"
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
          className="app__button"
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
      <div className="app__tiles-content">
        <FreaksGrid freaks={ freaks } />
      </div>
      <div>
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

export default App;
