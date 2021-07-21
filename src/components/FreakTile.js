import React from 'react';
import PropTypes from 'prop-types';
import './FreakTile.css';

function FreakTile({ id, picture, name }) {
  return (
    <div className="tile">
      <img src={ picture } alt="Face of the Freak" className="tile__img" />
      <h1 className="tile__name">{ name + id }</h1>
    </div>
  );
}

FreakTile.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default FreakTile;
