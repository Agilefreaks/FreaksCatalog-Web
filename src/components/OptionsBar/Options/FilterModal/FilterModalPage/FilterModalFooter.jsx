import PropTypes from 'prop-types';
import React from 'react';
import { Button, Modal } from 'react-bootstrap';

function FilterModalFooter({ applyFilters, resetModal }) {
  return (
    <Modal.Footer>
      <Button variant="primary" onClick={ applyFilters }>
        Apply filters
      </Button>
      <Button variant="secondary" onClick={ resetModal }>
        Reset filters
      </Button>
    </Modal.Footer>
  );
}

FilterModalFooter.propTypes = {
  applyFilters: PropTypes.func.isRequired,
  resetModal: PropTypes.func.isRequired,
};

export default FilterModalFooter;
