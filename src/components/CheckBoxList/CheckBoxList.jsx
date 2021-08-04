import React from 'react';
import PropTypes from 'prop-types';
import CheckBoxItem from '../CheckBoxItem/CheckBoxItem';
import './CheckBoxList.scss';

function CheckBoxList({ checkedState, onChange, keywords }) {
  const handleCheckedState = ({ target: { name, checked } }) => {
    const result = checked
      ? checkedState.concat(name)
      : checkedState.filter((item) => item !== name);

    onChange(result, name, checked);
  };

  const checkboxes = keywords.map((item) => (
    <CheckBoxItem
      name={ item.name }
      key={ item.id }
      id={ item.id }
      isSelected={ checkedState.includes(item.name) }
      onChange={ handleCheckedState }
    />
  ));

  return (checkboxes);
}

CheckBoxList.propTypes = {
  checkedState: PropTypes.instanceOf(Array).isRequired,
  onChange: PropTypes.func.isRequired,
  keywords: PropTypes.objectOf.isRequired,
};

export default CheckBoxList;
