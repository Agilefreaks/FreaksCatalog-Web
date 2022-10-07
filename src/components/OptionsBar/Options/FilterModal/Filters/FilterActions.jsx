import { useDispatch } from 'react-redux';
import relativeFilters from './RelativeFilters';
import { getFilterResetter, getFilterSetter } from '../../../../../filters/freaksFilter';

const filterActions = (filterIds, tabIndex) => {
  const dispatch = useDispatch();

  const filters = relativeFilters(filterIds, tabIndex);

  const applyFilters = () => {
    filters.getFilters().forEach((filterCategory, index) => {
      const setFilter = getFilterSetter(filterIds[index]);

      if (setFilter !== null) {
        dispatch(setFilter(filterCategory));
      }
    });
  };

  const resetFilters = () => {
    filters.resetRelativeFilters();

    const filterResetter = getFilterResetter(filterIds[tabIndex]);

    if (filterResetter !== null) {
      dispatch(filterResetter());
    }
  };

  const updateSelectedFilters = (event) => {
    const filter = event.target.id;
    filters.rebuildFilters();

    const filterIndex = filters.getRelativeFilters().indexOf(filter);
    if (filterIndex !== -1) {
      filters.spliceRelativeFiltersAt(filterIndex);
    } else {
      filters.pushRelativeFilters(filter);
    }
  };

  return {
    applyFilters,
    resetFilters,
    updateSelectedFilters,
    getQueuedFilters: filters.getRelativeFilters,
  };
};

export default filterActions;
