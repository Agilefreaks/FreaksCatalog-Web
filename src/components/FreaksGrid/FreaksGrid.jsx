import React from 'react';
import PropTypes from 'prop-types';
import FreakTile from '../FreakTile/FreakTile';
import './FreaksGrid.scss';

function FreaksGrid({ freaks }) {
  const tiles = freaks.map((user) => (
    <FreakTile
      id={ user.id }
      name={ user.firstName }
      picture={ user.picture }
      key={ user.id }
    />
  ));

  return (
    <div className="tiles">
      { tiles }
    </div>
  );
}

FreaksGrid.propTypes = {
  freaks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    picture: PropTypes.string,
  })).isRequired,
};

export default FreaksGrid;
