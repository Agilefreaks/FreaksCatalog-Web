import { useSelector } from 'react-redux';
import { useRef } from 'react';

const relativeFilters = (filterIds, tabIndex) => {
  const filters = useSelector((state) => state.filters);

  const getFilterMatrix = () => (filters ? filterIds.map((id) => filters?.[id]) : []);

  const queuedFilters = useRef(getFilterMatrix());

  const getFilters = () => queuedFilters.current;

  const getRelativeFilters = () => getFilters()[tabIndex];

  const pushRelativeFilters = (filter) => {
    getRelativeFilters().push(filter);

    return getRelativeFilters();
  };

  const spliceRelativeFiltersAt = (index) => {
    getRelativeFilters().splice(index, 1);

    return getRelativeFilters();
  };

  const rebuildFilters = () => {
    getFilters().forEach((queuedFilter, index) => {
      getFilters()[index] = [ ...getFilters()[index] ];
    });
  };

  const resetRelativeFilters = () => {
    rebuildFilters();
    getRelativeFilters().splice(0, getRelativeFilters().length);
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
