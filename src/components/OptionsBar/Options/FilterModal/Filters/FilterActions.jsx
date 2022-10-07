import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import { getFilterResetter, getFilterSetter } from '../../../../../filters/freaksFilter';

const filterActions = (filterIds, tabIndex) => {
  const dispatch = useDispatch();

  const filters = useSelector((state) => state.filters);

  const getFilterMatrix = () => {
    const filterMatrix = new Array(filterIds.length);

    filterIds.forEach((id, index) => {
      filterMatrix[index] = filters[id];
    });

    return filterMatrix;
  };

  const queuedFilters = useRef(getFilterMatrix());

  const getRelativeFilters = () => queuedFilters.current[tabIndex];

  const pushRelativeFilters = (filter) => getRelativeFilters().push(filter);

  const spliceRelativeFiltersAt = (index) => getRelativeFilters().splice(index, 1);

  const rebuildAllFilters = () => {
    queuedFilters.current.forEach((queuedFilter, index) => {
      queuedFilters.current[index] = [ ...queuedFilters.current[index] ];
    });
  };

  const resetRelativeFilters = () => {
    queuedFilters.current[tabIndex] = [];
  };

  const applyFilters = () => {
    queuedFilters.current.forEach((filterCategory, index) => {
      const setFilter = getFilterSetter(filterIds[index]);

      if (setFilter !== null) {
        dispatch(setFilter(filterCategory));
      }
    });
  };

  const resetFilters = () => {
    resetRelativeFilters();

    const filterResetter = getFilterResetter(filterIds[tabIndex]);

    if (filterResetter !== null) {
      dispatch(filterResetter());
    }
  };

  const updateSelectedFilters = (event) => {
    const filter = event.target.id;
    rebuildAllFilters();

    const filterIndex = getRelativeFilters().indexOf(filter);
    if (filterIndex !== -1) {
      spliceRelativeFiltersAt(filterIndex);
    } else {
      pushRelativeFilters(filter);
    }
  };

  return {
    applyFilters,
    resetFilters,
    updateSelectedFilters,
    getQueuedFilters: getRelativeFilters,
  };
};

export default filterActions;
