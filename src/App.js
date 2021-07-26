import React, { useState } from 'react';
import './App.css';
import FreakTile from './components/FreakTile/FreakTile';
import { freaks } from './mock-data/freaks.json';
import FreakModal from './components/FreakModal/FreakModal';

function App() {
  const [ open, setOpen ] = useState(false);
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
      <button type="button" onClick={ () => setOpen(true) }>Skills</button>
      <FreakModal title="Skills" onClose={ () => setOpen(false) } open={ open }>
        <p>content</p>
      </FreakModal>
      <div className="content">{ result }</div>
    </div>
  );
}

export default App;
