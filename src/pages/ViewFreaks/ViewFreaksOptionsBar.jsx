import React from 'react';
import PropTypes from 'prop-types';
import FilterModalOption from '../../components/OptionsBar/Options/FilterModal/FilterModalOption';
import FilterType from '../../filters/FilterType';
import OptionsBar from '../../components/OptionsBar/OptionsBar';

function ViewFreaksOptionsBar({ technologies, projects }) {
  const filtersData = [
    { label: 'Skills', filters: technologies, id: FilterType.skills },
    { label: 'Projects', filters: projects, id: FilterType.projects },
  ];

  return (
    <OptionsBar>
      <FilterModalOption filtersData={ filtersData } />
    </OptionsBar>
  );
}

ViewFreaksOptionsBar.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default ViewFreaksOptionsBar;
