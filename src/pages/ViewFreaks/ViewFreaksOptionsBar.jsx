import React from 'react';
import PropTypes from 'prop-types';
import FilterModalOption from '../../components/OptionsBar/Options/FilterModalOption';
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
  technologies: PropTypes.array.isRequired,
  projects: PropTypes.array.isRequired,
};

export default ViewFreaksOptionsBar;
