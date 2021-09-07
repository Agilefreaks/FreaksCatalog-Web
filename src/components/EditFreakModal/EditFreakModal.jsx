import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Modal from '../Modal/Modal';
import EditFreakForm from '../EditFreakForm/EditFreakForm';
import { FreakModelDefault, FreakModelProps } from '../../models/freak';

function EditFreakModal({ title, isOpen, onClose, freak: initialFreak }) {
  const [ freak, setFreak ] = useState(initialFreak);

  function handleSubmit(e) {
    e.preventDefault();
  }

  const getHeader = () => (
    <Button
      className="app-button -gray"
      variant="default"
      onClick={ () => setFreak(initialFreak) }
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

EditFreakModal.propTypes = {
  freak: PropTypes.shape(FreakModelProps),
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

EditFreakModal.defaultProps = {
  freak: FreakModelDefault,
};

export default EditFreakModal;
