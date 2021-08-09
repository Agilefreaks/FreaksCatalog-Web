import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Modal from '../Modal/Modal';
import EditFreakForm from '../EditFreakForm/EditFreakForm';

function AddFreakModal({ title, isOpen, onClose }) {
  const [ checkedState, setCheckedState ] = useState([]);

  return (
    <Modal
      title={ title }
      isOpen={ isOpen }
      checkedState={ checkedState }
      headerContent={ <button className="filter__button-reset" type="button" onClick={ () => setCheckedState([]) }>Reset</button> }
      footerContent={ <Button className="filter__button-apply" variant="primary py-2 px-5 " disabled>Summit</Button> }
      onClose={ onClose }
    >
      <EditFreakForm />
    </Modal>
  );
}

AddFreakModal.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddFreakModal;
