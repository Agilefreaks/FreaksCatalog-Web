import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import EditFreakForm from '../EditFreakForm/EditFreakForm';
import { FreakModelDefault } from '../../models/freaks';
import AppButton from '../AppButton/AppButton';

function AddFreakModal({ title, isOpen, onClose }) {
  const [ freak, setFreak ] = useState(FreakModelDefault);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(freak);
  }

  return (
    <Modal
      title={ title }
      isOpen={ isOpen }
      headerContent={ <AppButton btnText="Reset" btnStyle="gray" /> }
      footerContent={ <AppButton form="add-freak-form" btnText="Submit" btnType="submit" btnVariant="primary" btnStyle="py-2 px-5" /> }
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
