import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import PagesMenu from '../PagesMenu/PagesMenu';

function MenuModal({ isOpen, onClose }) {
  const getHeader = () => <></>;

  const getFooter = () => <></>;

  return (
    <Modal
      title="MENU"
      isOpen={ isOpen }
      headerContent={ getHeader() }
      footerContent={ getFooter() }
      onClose={ onClose }
    >
      <PagesMenu />
    </Modal>
  );
}

MenuModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MenuModal;
