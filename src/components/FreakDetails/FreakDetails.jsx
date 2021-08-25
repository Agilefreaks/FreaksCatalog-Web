import React from 'react';
import { useParams } from 'react-router-dom';
import { freaks } from '../../mock-data/freaks.json';
import './FreakDetails.scss';

function findFreak(id) {
  return (freak) => freak.id === id;
}

function FreakDetails() {
  let { id } = useParams();
  id = parseInt(id, 10);
  const freak = freaks.find(findFreak(id));

  const freakSkills = freak.skills.map((skill) => skill.name).join((', '));
  const freakProjects = freak.projects.map((project) => project.name).join((', '));

  return (
    <div className="freak-details">
      <h1>{ `${ freak.firstName } ${ freak.lastName }` }</h1>
      <img className="freak-details__img" src={ freak.picture } alt={ freak.firstName } />
      <h2>{ `${ freak.role } - ${ freak.norm }` }</h2>
      <p className="freak-details__description">{ freak.description }</p>
      <p>{ `Skills: ${ freakSkills }` }</p>
      <p>{ `Projects: ${ freakProjects }` }</p>
      <p>{ `Level: ${ freak.level }` }</p>
    </div>
  );
}

export default FreakDetails;
