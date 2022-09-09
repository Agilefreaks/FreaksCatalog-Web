import React from 'react';
import PropTypes from 'prop-types';
import FilterModal from '../FilterModal/FilterModal';
import './QueryFilterModal.scss';

function QueryFilterModal({ keywords, title, modalId, isOpen, setOpenModal }) {
  return (
    <div className="query-modal">
      <button
        className="query-modal__button"
        type="button"
        onClick={ () => setOpenModal(modalId) }
      >
        { title }
      </button>
      <FilterModal
        title={ title }
        isOpen={ isOpen }
        keywords={ keywords }
        onClose={ () => setOpenModal(null) }
        setOpenModal={ setOpenModal }
      />
    </div>
  );
}

QueryFilterModal.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.shape).isRequired,
  isOpen: PropTypes.bool.isRequired,
  setOpenModal: PropTypes.func.isRequired,
  modalId: PropTypes.string.isRequired,
};

export default QueryFilterModal;
