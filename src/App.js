import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import FreakTile from './components/FreakTile/FreakTile';
import { freaks } from './mock-data/freaks.json';
import './App.scss';
import FilterModal from './components/FilterModal/FilterModal';

library.add(faTimes);

function App() {
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
      <FilterModal />
      <div className="content">{ tiles }</div>
    </div>
  );
}

export default App;
