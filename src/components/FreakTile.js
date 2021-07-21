import React from 'react';
import PropTypes from 'prop-types';
import './FreakTile.css';

function FreakTile({ id, picture, name }) {
  return (
    <a href={ `https://localhost:4200/freaks/${ id }` } className="tile">
      <img src={ picture } alt="Face of the Freak" className="tile__img" />
      <h1 className="tile__name">{ name }</h1>
    </a>
  );
}

FreakTile.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default FreakTile;
