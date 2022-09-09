import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import FreakTile from '../FreakTile/FreakTile';
import './FreaksGrid.scss';
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

      const getFilteredFreaks = () => {
        const getSkillFilteredFreaks = () => {
          if (filters.skills.length === 0) {
            return freaks;
          }

          const isFilteredTech = tech => {
            return filters.skills.some(filter => filter === tech.name)
          };

          const hasFilteredTech = freak => {
            return freak.technologies.some(tech => isFilteredTech(tech))
          };

          return freaks.filter( freak => hasFilteredTech(freak));
        };

        const getProjectFilteredFreaks = () => {
          if (filters.projects.length === 0) {
            return freaks;
          }

          const isFilteredProj = proj => {
            return filters.projects.some(filter => filter === proj.name)
          };

          const hasFilteredProj = freak => {
            return freak.projects.some(tech => isFilteredProj(tech))
          };

          return freaks.filter( freak => hasFilteredProj(freak));
        };

        const intersection = (arr1, arr2) => {
          return arr1.filter(x => arr2.includes(x));
        };

        return intersection(getSkillFilteredFreaks(), getProjectFilteredFreaks());
      }

      return getFreakTiles(getFilteredFreaks(freaks));
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
