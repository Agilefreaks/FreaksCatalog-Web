import React from 'react';
import { skills } from '../../mock-data/skills.json';
import CheckBoxItem from '../CheckBoxItem/CheckBoxItem';

function CheckBoxList() {
  const languages = skills.map((item) => (
      <CheckBoxItem name={ item.name } isSelected={} onChange={ onSelected } />
  ));

  return (
    <div>
      { languages }
    </div>
  );
}
