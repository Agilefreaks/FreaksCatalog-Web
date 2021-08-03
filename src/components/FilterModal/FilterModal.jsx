import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from '../Modal/Modal';
import CheckBoxList from '../ChecBoxList/CheckBoxList';

function FilterModal() {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ checkedState, setCheckedState ] = useState([]);

  return (
    <div>
      <button className="app__button" type="button" onClick={ () => setIsOpen(true) }>Skills</button>
      <Modal
        title="Skills"
        onClose={ () => setIsOpen(false) }
        isOpen={ isOpen }
        headerContent={ <button className="app__button-reset" type="button" onClick={ () => setCheckedState([]) }>Reset</button> }
        footerContent={ <Button className="app__button-apply" variant="primary py-2 px-5 " disabled>Apply</Button> }
      >
        <CheckBoxList
          checkedState={ checkedState }
          onChange={ setCheckedState }
        />
      </Modal>
    </div>
  );
}

export default FilterModal;
