import React, { useEffect, useRef, useCallback } from 'react';
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

  const onKeydownCb = useCallback((event) => {
    if (event.key === 'Escape') {
      setOpenModal(false);
    }
  });

  useEffect(() => {
    document.addEventListener('keydown', onKeydownCb, false);

    return () => {
      document.removeEventListener('keydown', onKeydownCb, false);
    };
  }, []);

  return (
    <input
      type="text"
      className="input-filters"
      onChange={ onChangeFilteredTextCb }
      ref={ inputRef }
    />
  );
}

InputFilters.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpenModal: PropTypes.func.isRequired,
  setFilteredText: PropTypes.func.isRequired,
};

export default InputFilters;
