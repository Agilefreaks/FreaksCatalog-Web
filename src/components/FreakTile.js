import React from 'react';
import PropTypes from 'prop-types';
import Freak from '../types/Freak';

function FreakTile({ freak }) {
  return (
    <div>
      <img src={ freak.picture } alt="Face of the Freak" />
      <h1>{ freak.name }</h1>
    </div>
  );
}

FreakTile.propTypes = {
  freak: PropTypes.instanceOf(Freak).isRequired,
};

export default FreakTile;
