import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import './CheckBoxItem.scss';

function CheckBoxItem({ name, id, onChange, isSelected }) {
  return (
    <Form.Group className="checkbox-item" controlId="formBasicCheckbox">
      <Form.Check
        className="checkbox"
        data-testid="checkbox-input"
        type="checkbox"
        label={ name }
        name={ name }
        id={ `${ id }--${ name }` }
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
  id: PropTypes.string.isRequired,
};

export default CheckBoxItem;
