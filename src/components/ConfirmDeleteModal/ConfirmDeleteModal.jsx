import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Modal from '../Modal/Modal';
import './ConfirmDeleteModal.scss';

function ConfirmDeleteModal({ title, isOpen, onClose }) {
  const getFooter = () => (
    <div>
      <Button
        className="btn btn-outline-secondary app-button -medium"
        form="add-freak-form"
        type="submit"
        variant="default"
        onClick={ onClose }
      >
        Close
      </Button>
      <Button
        className="btn btn-danger app-button -medium"
        form="add-freak-form"
        type="submit"
        variant="primary"
      >
        Delete
      </Button>
    </div>
  );

  return (
    <Modal
      title={ title }
      isOpen={ isOpen }
      footerContent={ getFooter() }
      onClose={ onClose }
    >
      <div className="delete-message">
        <h1>Warning!</h1>
        <p>Are you sure you want to delete this freak?</p>
      </div>
    </Modal>
  );
}

ConfirmDeleteModal.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ConfirmDeleteModal;
