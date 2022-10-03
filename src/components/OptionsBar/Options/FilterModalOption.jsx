import React, { useState } from 'react';
import PropTypes from 'prop-types';
import OptionButton from '../OptionButton';
import FilterModal from './FilterModal';

function FilterModalOption({ label, filterId, filters }) {
  const [ show, setShow ] = useState(false);

  return (
    <>
      <FilterModal label={label} filters={filters} filterId={filterId} show={show} setShow={setShow} />
      <OptionButton label={ label } onClick={ () => setShow(!show) } />
    </>
  );
}

FilterModalOption.propTypes = {
  label: PropTypes.string.isRequired,
  filterId: PropTypes.string.isRequired,
  filters: PropTypes.array.isRequired,
};

export default FilterModalOption;
