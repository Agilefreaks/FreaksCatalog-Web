import React from 'react';
import PropTypes from 'prop-types';
import CheckBoxItem from '../CheckBoxItem/CheckBoxItem';

function CheckBoxList({ checkedState, onChange, keywords, filteredText }) {
  const handleCheckedState = ({ target: { name, checked } }) => {
    const result = checked
      ? checkedState.concat(name)
      : checkedState.filter((item) => item !== name);

    onChange(result);
  };

  const filteredTextTest = (item) => {
    if (typeof filteredText === 'string') {
      const itemNameLower = item.name.toLowerCase();
      const filterTextLower = filteredText.toLowerCase();

      return itemNameLower.includes(filterTextLower);
    }

    return true;
  };

  const checkboxes = keywords
    .filter(filteredTextTest)
    .map((item) => (
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
  filteredText: PropTypes.string,
  keywords: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default CheckBoxList;
