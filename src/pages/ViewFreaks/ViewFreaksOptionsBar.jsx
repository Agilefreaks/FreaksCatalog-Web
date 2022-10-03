import React from 'react';
import PropTypes from 'prop-types';
import FilterModalOption from '../../components/OptionsBar/Options/FilterModalOption';
import FilterType from '../../filters/FilterType';
import OptionsBar from '../../components/OptionsBar/OptionsBar';

function ViewFreaksOptionsBar({ technologies, projects }) {
  return (
    <OptionsBar>
      <FilterModalOption
        label="Skills"
        filters={ technologies }
        filterId={ FilterType.skills }
      />
      <FilterModalOption
        label="Projects"
        filters={ projects }
        filterId={ FilterType.projects }
      />
    </OptionsBar>
  );
}

ViewFreaksOptionsBar.propTypes = {
  technologies: PropTypes.array.isRequired,
  projects: PropTypes.array.isRequired,
};

export default ViewFreaksOptionsBar;
