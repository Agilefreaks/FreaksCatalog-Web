import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

function header(onClose, title, headerContent) {
  return (
    <div className="modal__header">
      <div className="modal__left--corner">
        <button className="modal__close-button" type="button" onClick={ onClose }>
          <i className="far fa-times" />
        </button>
      </div>
      <div className="modal__center">
        <h1 className="modal__title">{ title }</h1>
      </div>
      <div className="modal__right--corner">{ headerContent }</div>
    </div>
  );
}

function body(bodyContent) {
  return (
    <div className="modal__body">
      { bodyContent }
    </div>
  );
}

function footer(footerContent) {
  return (
    !!footerContent && (
      <div className="modal__footer">
        { footerContent }
      </div>
    )
  );
}

function Modal({
  isOpen,
  onClose,
  title,
  headerContent,
  children,
  footerContent,
}) {
  return (
    <div className={ `modal__wrapper ${ !isOpen ? '--hidden' : '' }` }>
      <div className="modal__overlay" />
      <div className="modal">
        <div className="modal__content">
          { header(onClose, title, headerContent) }
          { body(children) }
          { footer(footerContent) }
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  headerContent: PropTypes.node,
  children: PropTypes.node.isRequired,
  footerContent: PropTypes.node,
};

Modal.defaultProps = {
  headerContent: null,
  footerContent: null,
};

export default Modal;
