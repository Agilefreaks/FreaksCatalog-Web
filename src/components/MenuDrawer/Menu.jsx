import React, { useState } from 'react';
import MenuButton from './MenuButton';
import MenuModal from './MenuDrawer';

function Menu() {
  const [ isOpen, setOpenModal ] = useState(false);

  return (
    <>
      <MenuButton
        onClick={ () => {
          setOpenModal(true);
        } }
      />
      <MenuModal
        isOpen={ isOpen }
        onClose={ () => {
          setOpenModal(false);
        } }
      />
    </>
  );
}

export default Menu;
