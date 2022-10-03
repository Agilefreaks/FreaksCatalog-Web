import React, { useState } from 'react';
import PropTypes from 'prop-types';
import OptionButton from '../OptionButton';
import FilterModal from './FilterModal';

function FilterModalOption({ labels, filterIds, filters }) {
  const [ show, setShow ] = useState(false);

  return (
    <>
      <FilterModal
        labels={ labels }
        filters={ filters }
        filterId={ filterIds }
        show={ show }
        setShow={ setShow }
      />
      <OptionButton label="Filters" onClick={ () => setShow(!show) } />
    </>
  );
}

FilterModalOption.propTypes = {
  labels: PropTypes.array.isRequired,
  filterIds: PropTypes.array.isRequired,
  filters: PropTypes.array.isRequired,
};

export default FilterModalOption;
