import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import '../../styles/input-filters.scss';

function InputFilters({ isOpen, setOpenModal, setFilteredText }) {
  const inputRef = useRef();

  const focusInputTextbox = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => focusInputTextbox(), [ isOpen ]);

  const onChangeFilteredTextCb = (event) => {
    setFilteredText(event.target.value);
  };

  const onKeyDownCb = (event) => {
    if (event.keyCode === 27) {
      setOpenModal(false);
    }
  };

  return (
    <input
      type="text"
      className="input-filters"
      onChange={ onChangeFilteredTextCb }
      ref={ inputRef }
      onKeyDown={ onKeyDownCb }
    />
  );
}

InputFilters.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpenModal: PropTypes.func.isRequired,
  setFilteredText: PropTypes.func.isRequired,
};

export default InputFilters;
