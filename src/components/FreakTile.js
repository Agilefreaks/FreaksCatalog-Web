import React from 'react';
import PropTypes from 'prop-types';
import './FreakTile.css';

function FreakTile({ picture, name }) {
  return (
    <div className="tile">
      <img src={ picture } alt="Face of the Freak" className="tile__img" />
      <h1 className="tile__name">{ name }</h1>
    </div>
  );
}

FreakTile.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default FreakTile;
