import React from 'react';
import PropTypes from 'prop-types';
import FilterType from '../../filters/FilterType';
import FilterCard from './FilterCard/FilterCard';
import './filtermenu.scss';

function FilterMenu({ keywords }) {
  return (
    <div className="filtermenu">
      <FilterCard
        title="Technologies"
        keywords={ keywords.technologies }
        filterId={ FilterType.skills }
      />
      <FilterCard
        title="Projects"
        keywords={ keywords.projects }
        filterId={ FilterType.projects }
      />
    </div>
  );
}

FilterMenu.propTypes = {
  keywords: PropTypes.shape().isRequired,
};

export default FilterMenu;
