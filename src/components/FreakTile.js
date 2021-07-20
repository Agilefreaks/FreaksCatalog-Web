import React from 'react';
import PropTypes from 'prop-types';
import Freak from '../types/Freak';
import './FreakTile.css';

function FreakTile({ freak }) {
  return (
    <div className="tile">
      <img src={ freak.picture } alt="Face of the Freak" className="tile__img" />
      <h1 className="tile__name">{ freak.name }</h1>
    </div>
  );
}

FreakTile.propTypes = {
  freak: PropTypes.instanceOf(Freak).isRequired,
};

export default FreakTile;
