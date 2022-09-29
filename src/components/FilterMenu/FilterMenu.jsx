import React from 'react';
import PropTypes from 'prop-types';
import FilterCard from './FilterCard/FilterCard';
import './filtermenu.scss';

function FilterMenu({ keywords }) {
  const formatTitle = (title) => title[0].toUpperCase() + title.substring(1);

  return (
    <div className="filtermenu">
      { Object.keys(keywords).map((key) => (
        <FilterCard title={ formatTitle(key) } keywords={ keywords[key] } />
      )) }
    </div>
  );
}

FilterMenu.propTypes = {
  keywords: PropTypes.shape().isRequired,
};

export default FilterMenu;
