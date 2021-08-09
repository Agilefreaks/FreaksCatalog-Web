import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Modal from '../Modal/Modal';
import CheckBoxList from '../CheckBoxList/CheckBoxList';
import './FilterModal.scss';

function FilterModal({ title, isOpen, onClose, keywords }) {
  const [ checkedState, setCheckedState ] = useState([]);

  return (
    <Modal
      title={ title }
      isOpen={ isOpen }
      headerContent={ <button className="filter__button-reset" type="button" onClick={ () => setCheckedState([]) }>Reset</button> }
      footerContent={ <Button className="filter__button-apply" variant="primary py-2 px-5 " disabled>Apply</Button> }
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
  keywords: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FilterModal;
