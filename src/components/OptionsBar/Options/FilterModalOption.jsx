import React, { useState } from 'react';
import PropTypes from 'prop-types';
import OptionButton from '../OptionButton';
import QueryFilterModal from '../../QueryFilterModal/QueryFilterModal';

function FilterModalOption({ label, filterId, filters }) {
  const [ openModal, setOpenModal ] = useState(false);

  return (
    <>
      <QueryFilterModal
        title={ label }
        keywords={ filters }
        isOpen={ openModal }
        setOpenModal={ setOpenModal }
        filterId={ filterId }
      />
      <OptionButton label={ label } onClick={ () => setOpenModal(!openModal) } />
    </>
  );
}

FilterModalOption.propTypes = {
  label: PropTypes.string.isRequired,
  filterId: PropTypes.string.isRequired,
  filters: PropTypes.array.isRequired,
};

export default FilterModalOption;
