import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Modal from '../Modal/Modal';
import EditFreakForm from '../EditFreakForm/EditFreakForm';
import { FreakModelDefault, FreakModelProps } from '../../models/freak';

function EditFreakModal({ title, isOpen, onClose, freak }) {
  const [ findFreak, setFindFreak ] = useState(freak);

  function handleSubmit(e) {
    e.preventDefault();
  }

  const getHeader = () => (
    <Button
      className="app-button -gray"
      variant="default"
      onClick={ () => setFindFreak(freak) }
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
        freak={ findFreak }
        onChange={ setFindFreak }
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
