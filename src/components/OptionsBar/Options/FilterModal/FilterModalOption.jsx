import React, { useState } from 'react';
import PropTypes from 'prop-types';
import OptionButton from '../../OptionButton';
import FilterModal from './FilterModal';

function FilterModalOption({ filtersData }) {
  const [ show, setShow ] = useState(false);

  return (
    <>
      <FilterModal filtersData={ filtersData } show={ show } setShow={ setShow } />
      <OptionButton label="Filters" onClick={ () => setShow(!show) } />
    </>
  );
}

FilterModalOption.propTypes = {
  filtersData: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      filters: PropTypes.arrayOf(PropTypes.shape()),
      id: PropTypes.string,
    }),
  ).isRequired,
};

export default FilterModalOption;
