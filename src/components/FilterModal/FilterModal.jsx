import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Modal from '../Modal/Modal';
import CheckBoxList from '../CheckBoxList/CheckBoxList';

function FilterModal({ title, isOpen, onClose, keywords }) {
  const [ checkedState, setCheckedState ] = useState([]);

  const getHeader = () => (
    <Button
      className="app-button -gray"
      type="button"
      variant="default"
      onClick={ () => setCheckedState([]) }
    >
      Reset
    </Button>
  );

  const getFooter = () => (
    <Button
      className="app-button -large py-2 px-5"
      variant="primary"
      disabled
    >
      Apply
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
      <CheckBoxList
        keywords={ keywords }
        checkedState={ checkedState }
        onChange={ setCheckedState }
      />
    </Modal>
  );
}

FilterModal.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default FilterModal;
