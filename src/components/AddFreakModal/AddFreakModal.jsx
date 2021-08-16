import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Modal from '../Modal/Modal';
import EditFreakForm from '../EditFreakForm/EditFreakForm';
import { FreakModelDefault } from '../../models/freaks';
import './AddFreakModal.scss';

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
      headerContent={ <Button className="app-button gray" variant="default">Reset</Button> }
      footerContent={ <Button form="add-freak-form" type="submit" className="py-2 px-5 app-button apply" variant="primary">Submit</Button> }
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
