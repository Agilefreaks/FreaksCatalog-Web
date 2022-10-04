import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import filterActions from './FilterActions';
import FilterModalBody from './FilterModalPage/FilterModalBody';
import FilterModalFooter from './FilterModalPage/FilterModalFooter';
import FilterModalHeader from './FilterModalPage/FilterModalHeader';

function FilterModal({ labels, filters, filterId, show, setShow }) {
  const queuedFilters = useRef([]);
  const globalFilters = useSelector((state) => state.filters);
  const [ index, setIndex ] = useState(0);

  const actions = filterActions(filterId, index, queuedFilters);

  const applyFilters = () => {
    actions.applyFilters();
    setShow(false);
  };

  const resetModal = () => {
    actions.resetFilters();
    setShow(false);
  };

  useEffect(() => {
    if (globalFilters[filterId[index]]) {
      queuedFilters.current = globalFilters[filterId[index]];
    }
  }, [ index ]);

  return (
    <Modal show={ show } onHide={ () => setShow(false) }>
      <FilterModalHeader labels={ labels } index={ index } setIndex={ setIndex } />
      <FilterModalBody
        filters={ filters[index] }
        queuedFilters={ queuedFilters }
        onChange={ actions.updateSelectedFilters }
      />
      <FilterModalFooter applyFilters={ applyFilters } resetModal={ resetModal } />
    </Modal>
  );
}

FilterModal.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  filters: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape())).isRequired,
  filterId: PropTypes.arrayOf(PropTypes.string).isRequired,
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};

export default FilterModal;
