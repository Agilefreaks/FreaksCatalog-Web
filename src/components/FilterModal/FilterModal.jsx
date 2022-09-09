import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import Modal from '../Modal/Modal';
import CheckBoxList from '../CheckBoxList/CheckBoxList';
import { setSkillsFilter, resetSkillsFilter, setProjectsFilter, resetProjectsFilter } from '../../slices/filtersSlice';

function FilterModal({ title, isOpen, onClose, keywords, setOpenModal }) {
  const [ checkedState, setCheckedState ] = useState([]);
  const queuedFilters = useRef([]);

  const dispatch = useDispatch();

  const getFilterSetter = () => {
    switch (title) {
      case 'Skills' : return setSkillsFilter;
      case 'Projects': return setProjectsFilter;
      default: return null;
    }
  };

  const getFilterResetter = () => {
    switch (title) {
      case 'Skills' : return resetSkillsFilter;
      case 'Projects': return resetProjectsFilter;
      default: return null;
    }
  };

  const onChangeCb = (result, name, checked) => {
    setCheckedState(result, name, checked);
    queuedFilters.current = [...result];
  };

  const onClickCb = () => {
    const setFilter = getFilterSetter();
    dispatch(setFilter(queuedFilters.current))
    setOpenModal(false);
  };

  const resetFilters = () => {
    setCheckedState([]);
    queuedFilters.current = [];
    const resetFilter = getFilterResetter();
    dispatch(resetFilter());
  };

  const resetModal = () => {
    resetFilters();
    setOpenModal(false);
  };

  const getHeader = () => (
    <Button
      className="app-button -gray"
      type="button"
      variant="default"
      onClick={ () => resetModal() }
    >
      Reset
    </Button>
  );

  const getFooter = () => (
    <Button
      className="app-button -large py-2 px-5"
      variant="primary"
      onClick={() => onClickCb()}
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
        onChange={ onChangeCb }
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
};

export default FilterModal;
