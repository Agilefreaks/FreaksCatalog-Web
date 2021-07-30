import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './App.scss';
import FreakTile from './components/FreakTile/FreakTile';
import { freaks } from './mock-data/freaks.json';
import Modal from './components/Modal/Modal';
import CheckBoxItem from './components/CheckBoxItem/CheckBoxItem';

library.add(faTimes);

function App() {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ isSelected, setIsSelected ] = useState(false);
  const result = freaks.map((user) => (
    <FreakTile
      id={ user.id }
      name={ user.name }
      picture={ user.picture }
      key={ user.id }
    />
  ));

  return (
    <div>
      <button className="app__button" type="button" onClick={ () => setIsOpen(true) }>Skills</button>
      <Modal
        title="Skills"
        onClose={ () => setIsOpen(false) }
        isOpen={ isOpen }
        headerContent={ null }
        footerContent={ null }
      >
        <CheckBoxItem name="jon" id={ 1 } isSelected={ isSelected } onChange={ setIsSelected } />
      </Modal>
      <div className="content">{ result }</div>
    </div>
  );
}

export default App;
