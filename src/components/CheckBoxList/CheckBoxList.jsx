import React from 'react';
import PropTypes from 'prop-types';
import CheckBoxItem from '../CheckBoxItem/CheckBoxItem';

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

  return <div data-testid="checkbox-list">{ checkboxes }</div>;
}

CheckBoxList.propTypes = {
  checkedState: PropTypes.instanceOf(Array).isRequired,
  onChange: PropTypes.func.isRequired,
  keywords: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default CheckBoxList;
