import React from 'react';
import PropTypes from 'prop-types';
import './FreakModal.css';

function FreakModal({ open, onClose, title, children }) {
  return (
    <div className={ `modal__wrapper ${ !open ? '-hidden' : '' }` }>
      <div className="modal__overlay" />
      <div className="modal">
        <div className="modal__content">
          <div className="modal__header">
            <button className="modal__close-button" type="button" onClick={ onClose }>X</button>
            <h1 className="modal__title">{ title }</h1>
            <button type="button">Reset</button>
          </div>
          <div className="modal__body">
            { children }
          </div>
          <div>
            <button type="button" className="applyButton">Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
}

FreakModal.propTypes = {
  title: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default FreakModal;
