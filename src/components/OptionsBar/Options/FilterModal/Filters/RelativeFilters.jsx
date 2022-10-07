import { useSelector } from 'react-redux';
import { useRef } from 'react';

const relativeFilters = (filterIds, tabIndex) => {
  const filters = useSelector((state) => state.filters);

  const getFilterMatrix = () => {
    const filterMatrix = new Array(filterIds.length);

    filterIds.forEach((id, index) => {
      filterMatrix[index] = filters[id];
    });

    return filterMatrix;
  };

  const queuedFilters = useRef(getFilterMatrix());

  const getFilters = () => queuedFilters.current;

  const getRelativeFilters = () => getFilters()[tabIndex];

  const pushRelativeFilters = (filter) => getRelativeFilters().push(filter);

  const spliceRelativeFiltersAt = (index) => getRelativeFilters().splice(index, 1);

  const rebuildFilters = () => {
    getFilters().forEach((queuedFilter, index) => {
      getFilters()[index] = [ ...getFilters()[index] ];
    });
  };

  const resetRelativeFilters = () => {
    queuedFilters.current[tabIndex] = [];
  };

  return {
    getFilters,
    getRelativeFilters,
    pushRelativeFilters,
    spliceRelativeFiltersAt,
    rebuildFilters,
    resetRelativeFilters,
  };
};

export default relativeFilters;
