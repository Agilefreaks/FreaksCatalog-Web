import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { getFilterResetter, getFilterSetter } from '../../../../filters/freaksFilter';

const filterActions = (filterIds, index) => {
  const dispatch = useDispatch();
  const queuedFilters = useRef([]);

  const applyFilters = () => {
    const setFilter = getFilterSetter(filterIds[index]);

    if (setFilter !== null) {
      dispatch(setFilter(queuedFilters.current));
    }
  };

  const resetFilters = () => {
    queuedFilters.current = [];

    const filterResetter = getFilterResetter(filterIds[index]);

    if (filterResetter !== null) {
      dispatch(filterResetter());
    }
  };

  const updateSelectedFilters = (event) => {
    const filter = event.target.id;
    queuedFilters.current = [ ...queuedFilters.current ];

    const filterIndex = queuedFilters.current.indexOf(filter);
    if (filterIndex !== -1) {
      queuedFilters.current.splice(filterIndex, 1);
    } else {
      queuedFilters.current.push(filter);
    }
  };

  return {
    applyFilters,
    resetFilters,
    updateSelectedFilters,
    getQueuedFilters: () => queuedFilters,
  };
};

export default filterActions;
