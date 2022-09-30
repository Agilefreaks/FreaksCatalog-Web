import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './options-bar.scss';

function OptionButton({ label, onClick }) {
  return (
    <Button className="options-bar__button" variant="outline-secondary" onClick={ onClick }>
      { label }
    </Button>
  );
}

OptionButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default OptionButton;
