import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Drawer from '../Drawer/Drawer';
import PagesMenu from '../PagesMenu/PagesMenu';

function MenuDrawer({ isOpen }) {
  const getHeader = () => <></>;

  const getFooter = () => <></>;

  return (
    <Drawer
      title="MENU"
      isOpen={ isOpen }
      headerContent={ getHeader() }
      footerContent={ getFooter() }
      onClose={ onClose }
    >
      <PagesMenu />
    </Drawer>
  );
}

MenuDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MenuDrawer;
