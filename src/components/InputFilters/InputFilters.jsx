import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import '../../styles/input-filters.scss';

function InputFilters({ className, setFilteredText, initialFocus, active }) {
  const inputRef = useRef();

  useEffect(() => {
    initialFocus && inputRef.current?.focus();
    setFilteredText('');
  }, []);

  return (
    active && (
      <Form.Control
        className={ className }
        onChange={ (event) => {
          setFilteredText(event.target.value);
        } }
        ref={ inputRef }
      />
    )
  );
}

InputFilters.propTypes = {
  className: PropTypes.string,
  setFilteredText: PropTypes.func.isRequired,
  initialFocus: PropTypes.bool,
  active: PropTypes.bool,
};

InputFilters.defaultProps = {
  className: 'filters-input',
  initialFocus: false,
  active: true,
};

export default InputFilters;
