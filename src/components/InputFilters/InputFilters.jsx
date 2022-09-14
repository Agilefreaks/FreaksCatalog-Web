import React, { useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import '../../styles/input-filters.scss';

function InputFilters({ isOpen, setOpenModal, setFilteredText }) {
  const inputRef = useRef();

  useEffect(() => inputRef.current && inputRef.current.focus(), [ isOpen ]);

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
      onChange={ (event) => {
        setFilteredText(event.target.value);
      } }
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
