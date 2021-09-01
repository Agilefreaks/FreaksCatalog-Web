import React from 'react';
import PropTypes from 'prop-types';
import './FreakTile.css';
import { Link } from 'react-router-dom';

function FreakTile({ id, picture, name }) {
  return (
    <Link to={ `/freaks/${ id }` } className="tile" data-testid="freak-tile">
      <img src={ picture } alt="Face of the Freak" className="tile__img" data-testid="freak-picture" />
      <h1 className="tile__name" data-testid="freak-name">{ name }</h1>
    </Link>
  );
}

FreakTile.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default FreakTile;
