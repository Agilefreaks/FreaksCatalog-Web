import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import filterActions from './Filters/FilterActions';
import FilterModalBody from './FilterModalPage/FilterModalBody';
import FilterModalFooter from './FilterModalPage/FilterModalFooter';
import FilterModalHeader from './FilterModalPage/FilterModalHeader';

function FilterModal({ filtersData, show, setShow }) {
  const [ index, setIndex ] = useState(0);
  const [ inputPattern, setInputPattern ] = useState('');

  const extractFromFilters = (filters) => (category) => filters.map((filter) => filter[category]);

  const extract = extractFromFilters(filtersData);

  const labels = extract('label');
  const filters = extract('filters');
  const ids = extract('id');

  const actions = filterActions(ids, index);

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
      <FilterModalHeader
        labels={ labels }
        index={ index }
        setIndex={ setIndex }
        setInputPattern={ setInputPattern }
      />
      <FilterModalBody
        filters={ filters[index] }
        queuedFilters={ actions.getQueuedFilters() }
        onChange={ actions.updateSelectedFilters }
        inputPattern={ inputPattern }
      />
      <FilterModalFooter applyFilters={ applyFilters } resetModal={ resetModal } />
    </Modal>
  );
}

FilterModal.propTypes = {
  filtersData: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      filters: PropTypes.arrayOf(PropTypes.shape()),
      id: PropTypes.string,
    }),
  ).isRequired,
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};

export default FilterModal;
