import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import '../../styles/input-filters.scss';

function InputFilters({ setFilteredText, initialFocus }) {
  const inputRef = useRef();

  useEffect(() => {
    initialFocus && inputRef.current?.focus();
    setFilteredText('');
  }, []);

  return (
    <Form.Control
      className="filters-input"
      onChange={ (event) => {
        setFilteredText(event.target.value);
      } }
      ref={ inputRef }
    />
  );
}

InputFilters.propTypes = {
  setFilteredText: PropTypes.func.isRequired,
  initialFocus: PropTypes.bool,
};

InputFilters.defaultProps = {
  initialFocus: false,
};

export default InputFilters;
