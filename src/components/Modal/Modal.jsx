import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function getHeader(onClose, title, headerContent) {
  return (
    <div className="af-modal__header">
      <div className="af-modal__header-left-corner">
        <button className="af-modal__close-button" type="button" onClick={ onClose }>
          <FontAwesomeIcon icon="times" />
        </button>
      </div>
      <div className="af-modal__header-center">
        <h1 className="af-modal__title" data-testid="modal-title">{ title }</h1>
      </div>
      <div className="af-modal__header-right-corner" data-testid="modal-header-right-corner">{ headerContent }</div>
    </div>
  );
}

function getBody(bodyContent) {
  return (
    <div className="af-modal__body" data-testid="modal-body">
      { bodyContent }
    </div>
  );
}

function getFooter(footerContent) {
  return (
    !!footerContent && (
      <div className="af-modal__footer" data-testid="modal-footer">
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
    <div className={ `af-modal-wrapper ${ isOpen ? '' : '--hidden' }` } data-testid="modal-wrapper">
      <div className="af-modal-overlay" />
      <div className="af-modal">
        <div className="af-modal__content">
          <div className="af-modal__header-corp">
            { getHeader(onClose, title, headerContent) }
          </div>
          <div className="af-modal__corp">
            { getBody(children) }
            { getFooter(footerContent) }
          </div>
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
