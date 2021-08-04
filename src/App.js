import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import FreakTile from './components/FreakTile/FreakTile';
import { freaks } from './mock-data/freaks.json';
import { skills } from './mock-data/skills.json';
import './App.scss';
import FilterModal from './components/FilterModal/FilterModal';

library.add(faTimes);

function App() {
  const [ isOpen, setIsOpen ] = useState(false);

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
      <button className="app__button" type="button" onClick={ () => setIsOpen(true) }>Skills</button>
      <FilterModal
        title="Skills"
        isOpen={ isOpen }
        onClose={ () => setIsOpen(false) }
        keywords={ skills }
      />
      <div className="content">{ tiles }</div>
    </div>
  );
}

export default App;
