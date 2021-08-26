import React from 'react';
import PropTypes from 'prop-types';
import { FreakModelDefault, FreakModelProps } from '../../models/freak';
import './FreakDetails.scss';

function FreakDetails({ freak }) {
  const freakSkills = freak.skills.map((skill) => skill.name).join((', '));
  const freakProjects = freak.projects.map((project) => project.name).join((', '));

  return (
    <div className="freak-details">
      <h1>{ `${ freak.firstName } ${ freak.lastName }` }</h1>
      <img className="freak-details__img" src={ freak.picture } alt={ freak.firstName } />
      <h2>{ `${ freak.role } - ${ freak.norm }` }</h2>
      <p className="freak-details__description">{ freak.description }</p>
      <h5>{ `Skills: ${ freakSkills }` }</h5>
      <h5>{ `Projects: ${ freakProjects }` }</h5>
      <h5>{ `Level: ${ freak.level }` }</h5>
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
