import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import filterActions from './FilterActions';
import FilterModalBody from './FilterModalPage/FilterModalBody';
import FilterModalFooter from './FilterModalPage/FilterModalFooter';
import FilterModalHeader from './FilterModalPage/FilterModalHeader';

function FilterModal({ labels, filters, filterIds, show, setShow }) {
  const [ index, setIndex ] = useState(0);

  const actions = filterActions(filterIds, index);

  const applyFilters = () => {
    actions.applyFilters();
    setShow(false);
  };

  const resetModal = () => {
    actions.resetFilters();
    setShow(false);
  };

  return (
    <Modal show={ show } onHide={ () => setShow(false) }>
      <FilterModalHeader labels={ labels } index={ index } setIndex={ setIndex } />
      <FilterModalBody
        filters={ filters[index] }
        queuedFilters={ actions.getQueuedFilters() }
        onChange={ actions.updateSelectedFilters }
      />
      <FilterModalFooter applyFilters={ applyFilters } resetModal={ resetModal } />
    </Modal>
  );
}

FilterModal.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  filters: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape())).isRequired,
  filterIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};

export default FilterModal;
