import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import FreakTile from '../FreakTile/FreakTile';
import './FreaksGrid.scss';
import { getFilteredFreaks } from '../../filters/freaksFilter'
import { PhotoModelProps } from '../../models/freak';

function FreaksGrid({ freaks }) {
  const filters = useSelector((state) => state.filters);

  const getTiles = () => {
    const getFreakTiles = freaks => { return freaks.map((freak) => (
      <FreakTile
          id={ freak.id }
          name={ freak.firstName }
          photo={ freak.photo }
          key={ freak.id }
        />
      ))};

      return getFreakTiles(getFilteredFreaks(freaks, filters));
  }

  const [tiles, setTiles] = useState(getTiles);

  useEffect(() => {
    setTiles(getTiles());
  }, [filters]);

  return <div className="tiles">{ tiles }</div>;
}

FreaksGrid.propTypes = {
  freaks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      firstName: PropTypes.string,
      photo: PropTypes.shape(PhotoModelProps),
    }),
  ).isRequired,
};

export default FreaksGrid;
