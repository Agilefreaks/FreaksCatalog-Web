import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import '../../styles/input-filters.scss';

function InputFilters({ setFilteredText, initialFocus, active }) {
  const inputRef = useRef();

  useEffect(() => {
    initialFocus && inputRef.current?.focus();
    setFilteredText('');
  }, []);

  return (
    active && (
      <Form.Control
        className="filters-input"
        onChange={ (event) => {
          setFilteredText(event.target.value);
        } }
        ref={ inputRef }
      />
    )
  );
}

InputFilters.propTypes = {
  setFilteredText: PropTypes.func.isRequired,
  initialFocus: PropTypes.bool,
  active: PropTypes.bool,
};

InputFilters.defaultProps = {
  initialFocus: false,
  active: true,
};

export default InputFilters;
