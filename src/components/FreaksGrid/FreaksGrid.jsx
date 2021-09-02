import React from 'react';
import PropTypes from 'prop-types';
import FreakTile from '../FreakTile/FreakTile';
import './FreaksGrid.scss';
import { PhotoModelProps } from '../../models/freak';

function FreaksGrid({ freaks }) {
  console.log({ freaksGrid: freaks });
  const tiles = freaks.map((freak) => (
    <FreakTile
      id={ freak.id }
      name={ freak.firstName }
      photo={ freak.photo }
      key={ freak.id }
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
    id: PropTypes.string,
    firstName: PropTypes.string,
    photo: PropTypes.shape(PhotoModelProps),
  })).isRequired,
};

export default FreaksGrid;
