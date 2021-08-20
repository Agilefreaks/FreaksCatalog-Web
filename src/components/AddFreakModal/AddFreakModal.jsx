import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Modal from '../Modal/Modal';
import EditFreakForm from '../EditFreakForm/EditFreakForm';
import { FreakModelDefault } from '../../models/freak';

function AddFreakModal({ title, isOpen, onClose }) {
  const [ freak, setFreak ] = useState(FreakModelDefault);

  function handleSubmit(e) {
    console.log(freak);
    e.preventDefault();
  }

  const getHeader = () => (
    <Button
      className="app-button -gray"
      variant="default"
      onClick={ () => setFreak(FreakModelDefault) }
    >
      Reset
    </Button>
  );

  const getFooter = () => (
    <Button
      className="app-button -large"
      form="add-freak-form"
      type="submit"
      variant="primary"
    >
      Submit
    </Button>
  );

  return (
    <Modal
      title={ title }
      isOpen={ isOpen }
      headerContent={ getHeader() }
      footerContent={ getFooter() }
      onClose={ onClose }
    >
      <EditFreakForm
        freak={ freak }
        onChange={ setFreak }
        onSubmit={ handleSubmit }
      />
    </Modal>
  );
}

AddFreakModal.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddFreakModal;
