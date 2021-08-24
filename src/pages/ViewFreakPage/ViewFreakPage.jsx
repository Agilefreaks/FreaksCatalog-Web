import React from 'react';
import { useParams } from 'react-router-dom';
import { freaks } from '../../mock-data/freaks.json';
import './ViewFreakPage.scss';

function findFreak(id) {
  return (freak) => freak.id === id;
}

function ViewFreakPage() {
  let { id } = useParams();
  id = parseInt(id, 10);
  const freak = freaks.find(findFreak(id));

  return (
    <div className="view-page">
      <h1>{ `${ freak.firstName } ${ freak.lastName }` }</h1>
      <img className="view-page__img" src={ freak.picture } alt={ freak.firstName } />
      <h2>{ `${ freak.role } - ${ freak.norm }` }</h2>
      <p className="view-page__description">{ freak.description }</p>
      <p>{ `Skills: ${ freak.skills }` }</p>
      <p>{ `Projects: ${ freak.projects }` }</p>
      <p>{ `Level: ${ freak.level }` }</p>
    </div>
  );
}

ViewFreakPage.propTypes = {
};

export default ViewFreakPage;
