import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import Modal from '../Modal/Modal';
import CheckBoxList from '../CheckBoxList/CheckBoxList';
import { getFilterSetter, getFilterResetter } from '../../filters/freaksFilter';
import InputFilters from '../InputFilters/InputFilters';

function FilterModal({ title, isOpen, onClose, keywords, setOpenModal, filterId }) {
  const [ checkedState, setCheckedState ] = useState([]);
  const queuedFilters = useRef([]);
  const dispatch = useDispatch();

  const updateSelectedFilters = (result) => {
    setCheckedState(result);
    queuedFilters.current = result;
  };

  const applyFilters = () => {
    const setFilter = getFilterSetter(filterId);

    if (setFilter !== null) {
      dispatch(setFilter(queuedFilters.current));
    }

    setOpenModal(false);
  };

  const resetModal = () => {
    setCheckedState([]);
    queuedFilters.current = [];

    const filterResetter = getFilterResetter(title);

    if (filterResetter !== null) {
      dispatch(filterResetter());
    }

    setOpenModal(false);
  };
  const [ filteredText, setFilteredText ] = useState(null);

  const getHeader = () => (
    <Button
      className="app-button -gray"
      type="button"
      variant="default"
      onClick={ resetModal }
    >
      Reset
    </Button>
  );

  const getFooter = () => (
    <Button
      className="app-button -large py-2 px-5"
      variant="primary"
      onClick={ applyFilters }
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
      <InputFilters
        isOpen={ isOpen }
        setOpenModal={ setOpenModal }
        setFilteredText={ setFilteredText }
      />
      <CheckBoxList
        keywords={ keywords }
        checkedState={ checkedState }
        onChange={ updateSelectedFilters }
        filteredText={ filteredText }
      />
    </Modal>
  );
}

FilterModal.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.shape).isRequired,
  setOpenModal: PropTypes.func.isRequired,
  filterId: PropTypes.string.isRequired,
};

export default FilterModal;
