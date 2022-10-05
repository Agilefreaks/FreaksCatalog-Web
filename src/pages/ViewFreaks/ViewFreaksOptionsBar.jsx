import React from 'react';
import PropTypes from 'prop-types';
import FilterModalOption from '../../components/OptionsBar/Options/FilterModal/FilterModalOption';
import FilterType from '../../filters/FilterType';
import OptionsBar from '../../components/OptionsBar/OptionsBar';

function ViewFreaksOptionsBar({ technologies, projects }) {
  return (
    <OptionsBar>
      <FilterModalOption
        labels={ [ 'Skills', 'Projects' ] }
        filters={ [ technologies, projects ] }
        filterIds={ [ FilterType.skills, FilterType.projects ] }
      />
    </OptionsBar>
  );
}

ViewFreaksOptionsBar.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default ViewFreaksOptionsBar;
