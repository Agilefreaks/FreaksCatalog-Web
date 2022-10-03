import React, { useRef } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getFilterSetter, getFilterResetter } from '../../../filters/freaksFilter';
import FilterModalHeader from './FilterModalPage/FilterModalHeader';
import FilterModalBody from './FilterModalPage/FilterModalBody';
import FilterModalFooter from './FilterModalPage/FilterModalFooter';

function FilterModal({ label, filters, filterId, show, setShow }) {
  const queuedFilters = useRef([]);
  const dispatch = useDispatch();

  const updateSelectedFilters = (event) => {
    const filter = event.target.id;
    queuedFilters.current = [ ...queuedFilters.current ];

    const index = queuedFilters.current.indexOf(filter);
    if (index !== -1) {
      queuedFilters.current.splice(index, 1);
    } else {
      queuedFilters.current.push(filter);
    }
  };

  const applyFilters = () => {
    const setFilter = getFilterSetter(filterId);

    if (setFilter !== null) {
      dispatch(setFilter(queuedFilters.current));
    }

    setShow(false);
  };

  const resetModal = () => {
    queuedFilters.current = [];

    const filterResetter = getFilterResetter(filterId);

    if (filterResetter !== null) {
      dispatch(filterResetter());
    }

    setShow(false);
  };

  return (
    <Modal show={ show } onHide={ () => setShow(false) }>
      <FilterModalHeader title={ label } />
      <FilterModalBody
        filters={ filters }
        queuedFilters={ queuedFilters }
        onChange={ updateSelectedFilters }
      />
      <FilterModalFooter applyFilters={ applyFilters } resetModal={ resetModal } />
    </Modal>
  );
}

export default FilterModal;
