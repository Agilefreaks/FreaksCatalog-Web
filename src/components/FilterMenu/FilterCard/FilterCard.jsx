import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CheckBoxList from '../../CheckBoxList/CheckBoxList';
import './filtercard.scss';

function FilterCard({ title, keywords }) {
  const [ checkedState, setCheckedState ] = useState([]);

  const updateSelectedFilters = (result) => {
    setCheckedState(result);
  };

  return (
    <div className="filtercard">
      <span className="filtercard__title">{ title }</span>
      <CheckBoxList
        keywords={ keywords }
        checkedState={ checkedState }
        onChange={ updateSelectedFilters }
      />
    </div>
  );
}

FilterCard.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default FilterCard;
