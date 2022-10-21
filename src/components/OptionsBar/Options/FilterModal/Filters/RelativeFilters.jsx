import { useSelector } from 'react-redux';
import { useRef } from 'react';

const relativeFilters = (filterIds, tabIndex) => {
  const filters = useSelector((state) => state.filters);

  const getFilterMatrix = () => (filters ? filterIds.map((id) => filters?.[id]) : []);

  const queuedFilters = useRef(getFilterMatrix());

  const getFilters = () => queuedFilters.current;

  const getRelativeFilters = () => getFilters()[tabIndex];

  const setRelativeFilters = (value) => {
    queuedFilters.current[tabIndex] = value;

    return getRelativeFilters();
  };

  const pushRelativeFilters = (filter) => {
    setRelativeFilters([ ...getRelativeFilters(), filter ]);

    return getRelativeFilters();
  };

  const spliceRelativeFiltersAt = (index) => {
    const matchingFilters = getRelativeFilters().filter((filter, i) => i !== index);
    setRelativeFilters(matchingFilters);

    return getRelativeFilters();
  };

  const resetRelativeFilters = () => {
    setRelativeFilters([]);

    return getRelativeFilters();
  };

  return {
    getFilters,
    getRelativeFilters,
    pushRelativeFilters,
    spliceRelativeFiltersAt,
    resetRelativeFilters,
  };
};

export default relativeFilters;
