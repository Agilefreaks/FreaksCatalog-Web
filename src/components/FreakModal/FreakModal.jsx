import React from 'react';
import PropTypes from 'prop-types';
import './FreakModal.css';

function FreakModal({ open, onClose }) {
  if (!open) {
    return null;
  }

  return (

    <div className="modal">
      <div className="modal__content">
        <div className="modal__header">
          <button type="button" onClick={ onClose }>X</button>
          <h1>Skills</h1>
          <button type="button">Reset</button>
        </div>
        <div className="modal__body">
          Modal content
        </div>
        <div>
          <button type="button">Apply</button>
        </div>
      </div>
    </div>
  );
}

FreakModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default FreakModal;
