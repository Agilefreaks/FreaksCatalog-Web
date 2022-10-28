import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function OptionButton({ label, onClick }) {
  return (
    <Button variant="outline-primary" onClick={ onClick }>
      { label }
    </Button>
  );
}

OptionButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default OptionButton;
