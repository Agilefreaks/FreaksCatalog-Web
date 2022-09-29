import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import CheckBoxList from '../../CheckBoxList/CheckBoxList';
import { getFilterSetter } from '../../../filters/freaksFilter';
import './filtercard.scss';

function FilterCard({ title, keywords, filterId }) {
  const [ checkedState, setCheckedState ] = useState([]);
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
      <span className="filtercard__title">{ title }</span>
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
