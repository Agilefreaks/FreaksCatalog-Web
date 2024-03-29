import PropTypes from 'prop-types';
import React from 'react';
import FilterType from '../../filters/FilterType';
import FilterCard from './FilterCard/FilterCard';
import './filtermenu.scss';

function FilterMenu({ technologies, projects }) {
  return (
    <div className="filtermenu">
      <FilterCard title="Skills" keywords={ technologies } filterId={ FilterType.skills } />
      <FilterCard title="Projects" keywords={ projects } filterId={ FilterType.projects } />
    </div>
  );
}

FilterMenu.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default FilterMenu;
