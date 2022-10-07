import React, { useState } from 'react';
import MenuButton from './MenuButton';
import MenuDrawer from './MenuDrawer';

function Menu() {
  const [ isOpen, setOpenModal ] = useState(false);

  return (
    <>
      <MenuButton
        onClick={ () => {
          setOpenModal(true);
        } }
      />
      <MenuDrawer isOpen={ isOpen } setOpenModal={ setOpenModal } />
    </>
  );
}

export default Menu;
