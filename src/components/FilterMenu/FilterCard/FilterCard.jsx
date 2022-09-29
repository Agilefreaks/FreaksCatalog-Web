import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterSetter } from '../../../filters/freaksFilter';
import CheckBoxList from '../../CheckBoxList/CheckBoxList';
import './filtercard.scss';

function FilterCard({ title, keywords, filterId }) {
  const filters = useSelector((state) => state.filters);
  const [ checkedState, setCheckedState ] = useState(filters[filterId]);
  const dispatch = useDispatch();

  const applyFilters = (result) => {
    setCheckedState(result);
    const setFilter = getFilterSetter(filterId);

    if (setFilter !== null) {
      dispatch(setFilter(result));
    }
  };

  return (
    <div className="filtercard">
      <div className="filtercard__title-container">
        <span className="filtercard__title">{ title }</span>
        <Button
          className="filtercard__dropdown-btn"
          variant="outline-secondary"
          onClick={ () => {} }
        >
          <FontAwesomeIcon icon="fa-caret-down" />
        </Button>
      </div>
      <CheckBoxList
        keywords={ keywords }
        checkedState={ checkedState }
        onChange={ applyFilters }
      />
    </div>
  );
}

FilterCard.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.shape).isRequired,
  filterId: PropTypes.string.isRequired,
};

export default FilterCard;
