import React from 'react';
import PropTypes from 'prop-types';
import './Drawer.scss';

function Drawer({ isOpen, setOpenModal, children }) {
  return (
    <div className={ `drawer-wrapper${ isOpen ? '' : '-hidden' }` }>
      <div
        className="drawer-shadow-overlay"
        onClick={ () => {
          setOpenModal(false);
        } }
      />
      <div className="drawer-content">{ children }</div>
    </div>
  );
}

Drawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpenModal: PropTypes.func.isRequired,
};

export default Drawer;
