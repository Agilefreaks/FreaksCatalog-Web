import React, { useState, useEffect, useRef } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterSetter, getFilterResetter } from '../../../filters/freaksFilter';
import FilterModalHeader from './FilterModalPage/FilterModalHeader';
import FilterModalBody from './FilterModalPage/FilterModalBody';
import FilterModalFooter from './FilterModalPage/FilterModalFooter';

function FilterModal({ labels, filters, filterId, show, setShow }) {
  const queuedFilters = useRef([]);
  const dispatch = useDispatch();
  const globalFilters = useSelector((state) => state.filters);
  const [ index, setIndex ] = useState(0);

  const updateSelectedFilters = (event) => {
    const filter = event.target.id;
    queuedFilters.current = [ ...queuedFilters.current ];

    const filterIndex = queuedFilters.current.indexOf(filter);
    if (filterIndex !== -1) {
      queuedFilters.current.splice(filterIndex, 1);
    } else {
      queuedFilters.current.push(filter);
    }
  };

  const applyFilters = () => {
    const setFilter = getFilterSetter(filterId[index]);

    if (setFilter !== null) {
      dispatch(setFilter(queuedFilters.current));
    }

    setShow(false);
  };

  const resetModal = () => {
    queuedFilters.current = [];

    const filterResetter = getFilterResetter(filterId[index]);

    if (filterResetter !== null) {
      dispatch(filterResetter());
    }

    setShow(false);
  };

  useEffect(() => {
    if(globalFilters[filterId[index]]) {
        queuedFilters.current = globalFilters[filterId[index]];
    }
  }, [index]);

  return (
    <Modal show={ show } onHide={ () => setShow(false) }>
      <FilterModalHeader labels={ labels } index={ index } setIndex={ setIndex } />
      <FilterModalBody
        filters={ filters[index] }
        queuedFilters={ queuedFilters }
        onChange={ updateSelectedFilters }
      />
      <FilterModalFooter applyFilters={ applyFilters } resetModal={ resetModal } />
    </Modal>
  );
}

export default FilterModal;
