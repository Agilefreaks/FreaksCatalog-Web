import React from 'react';
import PropTypes from 'prop-types';

function CheckBoxItem({ name, id, onChange, isSelected }) {
  return (
    <label htmlFor={ id }>
      <input type="checkbox" id={ id } onChange={ onChange } checked={ isSelected } />
      { name }
    </label>
  );
}

CheckBoxItem.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default CheckBoxItem;
