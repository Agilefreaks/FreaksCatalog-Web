import { useDispatch } from 'react-redux';
import { getFilterResetter, getFilterSetter } from '../../../../filters/freaksFilter';

const filterActions = (filterId, index, queuedFilters) => {
  const dispatch = useDispatch();

  const applyFilters = () => {
    const setFilter = getFilterSetter(filterId[index]);

    if (setFilter !== null) {
      dispatch(setFilter(queuedFilters.current));
    }
  };

  const resetFilters = () => {
    queuedFilters.current = [];

    const filterResetter = getFilterResetter(filterId[index]);

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
  };
};

export default filterActions;
