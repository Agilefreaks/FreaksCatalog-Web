import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import './button-menu.scss';

function MenuButton() {
  const [ openModal, setOpenModal ] = useState(null);

  return (
    <Button
      className="button-menu"
      variant="outline-secondary"
      onClick={ () => setOpenModal(true) }
    >
      <FontAwesomeIcon icon="fa-bars" />
    </Button>
  );
}

export default MenuButton;
