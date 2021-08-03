import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import './CheckBoxItem.scss';

function CheckBoxItem({ name, id, onChange, isSelected }) {
  return (
    <Form.Group controlId="formBasicCheckbox">
      <Form.Check
        className="checkbox"
        type="checkbox"
        label={ name }
        name={ name }
        id={ id }
        onChange={ onChange }
        checked={ isSelected }
      />
    </Form.Group>
  );
}

CheckBoxItem.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default CheckBoxItem;
