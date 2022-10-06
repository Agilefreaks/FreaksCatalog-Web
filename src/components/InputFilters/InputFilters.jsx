import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import '../../styles/input-filters.scss';

function InputFilters({ isOpen, setFilteredText }) {
  const inputRef = useRef();

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [ isOpen ]);

  return (
    <Form.Control
      id="filters-input"
      onChange={ (event) => {
        setFilteredText(event.target.value);
      } }
      ref={ inputRef }
    />
  );
}

InputFilters.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setFilteredText: PropTypes.func.isRequired,
};

export default InputFilters;
