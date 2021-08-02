import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { skills } from '../../mock-data/skills.json';
import CheckBoxItem from '../CheckBoxItem/CheckBoxItem';

function CheckBoxList({ onChange }) {
  const [ checkedState, setCheckedState ] = useState([]);

  const handleCheckedState = ({ target: { name, checked } }) => {
    const result = checked
      ? checkedState.concat(name)
      : checkedState.filter((item) => item !== name);

    setCheckedState(result);
    onChange(result, name, checked);
  };

  const checkboxes = skills.map((item) => (
    <CheckBoxItem
      name={ item.name }
      key={ item.id }
      id={ item.id }
      isSelected={ checkedState.includes(item.name) }
      onChange={ (e) => handleCheckedState(e) }
    />
  ));

  return (
    <div>
      { checkboxes }
    </div>
  );
}

CheckBoxList.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default CheckBoxList;
