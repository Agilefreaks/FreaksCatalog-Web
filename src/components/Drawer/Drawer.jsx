import React from 'react';
import PropTypes from 'prop-types';
import './Drawer.scss';

function Drawer({ isOpen, setOpenModal, children }) {
  const closeDrawerOnKeyDown = (e) => {
    if (e.key === 'Escape') {
      setOpenModal(false);
    }
  };

  return (
    <div className={ `drawer-wrapper${ isOpen ? '' : '-hidden' }` }>
      <div
        className="drawer-shadow-overlay"
        onClick={ () => {
          setOpenModal(false);
        } }
        onKeyDown={ closeDrawerOnKeyDown }
        role="presentation"
      />
      <div className={ `drawer-content drawer-content-${ isOpen ? 'opened' : 'closed' }` }>
        { children }
      </div>
    </div>
  );
}

Drawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpenModal: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Drawer;
