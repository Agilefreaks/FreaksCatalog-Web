import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import FreakTile from './components/FreakTile/FreakTile';
import { freaks } from './mock-data/freaks.json';
import Modal from './components/Modal/Modal';
import CheckBoxList from './components/ChecBoxList/CheckBoxList';
import './App.scss';

library.add(faTimes);

function App() {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ checkedState, setCheckedState ] = useState([]);

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
      <Modal
        title="Skills"
        onClose={ () => setIsOpen(false) }
        isOpen={ isOpen }
        headerContent={ <button className="app__button-reset" type="button" onClick={ () => setCheckedState([]) }>Reset</button> }
        footerContent={ <Button className="app__button-apply" variant="primary" size="lg">Apply</Button> }
      >
        <CheckBoxList
          checkedState={ checkedState }
          onChange={ (result, name, checked) => setCheckedState(result, name, checked) }
        />
      </Modal>
      <div className="content">{ tiles }</div>
    </div>
  );
}

export default App;
