import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import FreakTile from './components/FreakTile/FreakTile';
import { freaks } from './mock-data/freaks.json';
import { skills } from './mock-data/skills.json';
import { projects } from './mock-data/projects.json';
import './App.scss';
import FilterModal from './components/FilterModal/FilterModal';

library.add(faTimes);

const modals = {
  SKILLS: 'skills',
  PROJECTS: 'projects',
};

function App() {
  const [ openModal, setOpenModal ] = useState(null);

  const tiles = freaks.map((user) => (
    <FreakTile
      id={ user.id }
      name={ user.name }
      picture={ user.picture }
      key={ user.id }
    />
  ));

  return (
    <div className="app">
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
      <div className="content">{ tiles }</div>
    </div>
  );
}

export default App;
