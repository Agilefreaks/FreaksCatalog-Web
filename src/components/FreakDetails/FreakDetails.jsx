import React from 'react';
import PropTypes from 'prop-types';
import { FreakModelDefault, FreakModelProps } from '../../models/freak';
import './FreakDetails.scss';
import logo from '../../images/logo-only-blue.svg';

function FreakDetails({ freak }) {
  const freakTechnologies = freak.technologies
    .map((technology) => technology.name)
    .join(', ');
  const freakProjects = freak.projects.map((project) => project.name).join(', ');

  return (
    <div className="freak-details" data-testid="freak-details">
      <h1 data-testid="freak-name">{ `${ freak.firstName } ${ freak.lastName }` }</h1>
      <img
        className="freak-details__img"
        data-testid="freak-img"
        src={ freak.photo?.uri ?? logo }
        alt={ freak.firstName }
      />
      <h2 data-testid="freak-role-norm">{ `${ freak.role.name } - ${ freak.norm.name }` }</h2>
      <p className="freak-details__description" data-testid="freak-description">
        { freak.description }
      </p>
      <h5 data-testid="freak-skills">{ `Skills: ${ freakTechnologies }` }</h5>
      <h5 data-testid="freak-projects">{ `Projects: ${ freakProjects }` }</h5>
      <h5 data-testid="freak-level">{ `Level: ${ freak.level.name }` }</h5>
    </div>
  );
}

FreakDetails.propTypes = {
  freak: PropTypes.shape(FreakModelProps),
};

FreakDetails.defaultProps = {
  freak: FreakModelDefault,
};

export default FreakDetails;
