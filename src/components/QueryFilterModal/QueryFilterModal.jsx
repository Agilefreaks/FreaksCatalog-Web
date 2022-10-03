import React from 'react';
import PropTypes from 'prop-types';
import FilterModal from '../FilterModal/FilterModal';
import './QueryFilterModal.scss';

function QueryFilterModal({ keywords, title, isOpen, setOpenModal, filterId }) {
  return (
    <div className="query-modal">
      <FilterModal
        title={ title }
        isOpen={ isOpen }
        keywords={ keywords }
        onClose={ () => setOpenModal(null) }
        setOpenModal={ setOpenModal }
        filterId={ filterId }
      />
    </div>
  );
}

QueryFilterModal.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.shape).isRequired,
  isOpen: PropTypes.bool.isRequired,
  setOpenModal: PropTypes.func.isRequired,
  filterId: PropTypes.string.isRequired,
};

export default QueryFilterModal;
