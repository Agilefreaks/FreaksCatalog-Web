import React from 'react';
import PropTypes from 'prop-types';
import './FreakTile.css';
import { Link } from 'react-router-dom';
import { PhotoModelProps } from '../../models/freak';
import logo from '../../images/logo-only-blue.svg';

function FreakTile({ id, photo, name }) {
  return (
    <Link to={ `/freaks/${ id }` } className="tile" data-testid="freak-tile">
      <img
        src={ photo?.uri ?? logo }
        alt="Face of the Freak"
        className="tile__img"
        data-testid="freak-picture"
      />
      <h1 className="tile__name" data-testid="freak-name">
        { name }
      </h1>
    </Link>
  );
}

FreakTile.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.shape(PhotoModelProps),
};

FreakTile.defaultProps = {
  photo: null,
};

export default FreakTile;
