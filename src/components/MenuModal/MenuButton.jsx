import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import './button-menu.scss';
import PropTypes from 'prop-types';

function MenuButton({ onClick }) {
  return (
    <Button className="button-menu" variant="outline-secondary" onClick={ onClick }>
      <FontAwesomeIcon icon="fa-bars" />
    </Button>
  );
}

MenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default MenuButton;
