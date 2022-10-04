import React, { useState } from 'react';
import PropTypes from 'prop-types';
import OptionButton from '../../OptionButton';
import FilterModal from './FilterModal';

function FilterModalOption({ labels, filterIds, filters }) {
  const [ show, setShow ] = useState(false);

  return (
    <>
      <FilterModal
        labels={ labels }
        filters={ filters }
        filterIds={ filterIds }
        show={ show }
        setShow={ setShow }
      />
      <OptionButton label="Filters" onClick={ () => setShow(!show) } />
    </>
  );
}

FilterModalOption.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  filterIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  filters: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape())).isRequired,
};

export default FilterModalOption;
