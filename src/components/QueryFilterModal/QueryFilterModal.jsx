import React from 'react';
import PropTypes from 'prop-types';
import FilterModal from '../FilterModal/FilterModal';
import './QueryFilterModal.scss';

function QueryFilterModal({ keywords, title, modalId, isOpen, setOpenModal }) {
  console.log(11111111, keywords);
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
        title="Skills"
        isOpen={ isOpen }
        keywords={ keywords }
        onClose={ () => setOpenModal(null) }
      />
    </div>
  );
}

QueryFilterModal.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.object).isRequired,
  isOpen: PropTypes.bool.isRequired,
  setOpenModal: PropTypes.func.isRequired,
  modalId: PropTypes.string.isRequired,
};

export default QueryFilterModal;
