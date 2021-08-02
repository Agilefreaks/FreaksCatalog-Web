import React from 'react';
import PropTypes from 'prop-types';
import './CheckBoxItem.scss';

function CheckBoxItem({ name, id, onChange, isSelected }) {
  return (
    <label className="checkbox" htmlFor={ id }>
      <input type="checkbox" name={ name } id={ id } onChange={ onChange } checked={ isSelected } />
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
