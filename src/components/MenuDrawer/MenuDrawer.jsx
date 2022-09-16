import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Drawer from '../Drawer/Drawer';
import PagesMenu from '../PagesMenu/PagesMenu';

function MenuDrawer({ isOpen, setOpenModal }) {
  return (
    <Drawer isOpen={ isOpen } setOpenModal={ setOpenModal }>
      <PagesMenu
        onClick={ () => {
          setOpenModal(false);
        } }
      />
    </Drawer>
  );
}

MenuDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpenModal: PropTypes.func.isRequired,
};

export default MenuDrawer;
