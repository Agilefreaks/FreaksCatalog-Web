import React, { useState } from 'react';
import './App.css';
import FreakTile from './components/FreakTile/FreakTile';
import { freaks } from './mock-data/freaks.json';
import Modal from './components/Modal/Modal';

function App() {
  const [ isOpen, setOpen ] = useState(false);
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
      <button className="skillsButton" type="button" onClick={ () => setOpen(true) }>Skills</button>
      <Modal
        title="Skills"
        onClose={ () => setOpen(false) }
        isOpen={ isOpen }
        headerContent={ null }
        footerContent={ null }
      >
        <p>Modal content</p>
      </Modal>
      <div className="content">{ result }</div>
    </div>
  );
}

export default App;
