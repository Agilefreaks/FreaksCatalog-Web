import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import '../../styles/input-filters.scss';

function InputFilters({ className, setFilteredText, initialFocus, active, currentText }) {
  const inputRef = useRef();

  useEffect(() => {
    if (initialFocus) {
      inputRef.current?.focus();
    }

    setFilteredText('');
  }, []);

  return (
    active && (
      <Form.Control
        className={ className }
        value={ currentText }
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
  currentText: PropTypes.string,
  setFilteredText: PropTypes.func.isRequired,
  initialFocus: PropTypes.bool,
  active: PropTypes.bool,
};

InputFilters.defaultProps = {
  className: 'filters-input',
  currentText: '',
  initialFocus: false,
  active: true,
};

export default InputFilters;
