import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import Modal from '../Modal/Modal';
import CheckBoxList from '../CheckBoxList/CheckBoxList';
import { getFilterSetter, getFilterResetter } from '../../filters/freaksFilter';

function FilterModal({ title, isOpen, onClose, keywords, setOpenModal, filterId }) {
  const [ checkedState, setCheckedState ] = useState([]);
  const queuedFilters = useRef([]);
  const dispatch = useDispatch();

  const updateSelectedFilters = (result) => {
    setCheckedState(result);
    queuedFilters.current = [ ...result ];
  };

  const applyFilters = () => {
    const setFilter = getFilterSetter(filterId);
    dispatch(setFilter(queuedFilters.current));
    setOpenModal(false);
  };

  const resetModal = () => {
    setCheckedState([]);
    queuedFilters.current = [];
    dispatch(getFilterResetter(title)());
    setOpenModal(false);
  };

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
      <CheckBoxList
        keywords={ keywords }
        checkedState={ checkedState }
        onChange={ updateSelectedFilters }
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
