import React from 'react';
import { Button, Modal } from 'react-bootstrap';

function FilterModalHeader({ labels, index: listIndex, setIndex }) {
  return (
    <Modal.Header closeButton>
      <Modal.Title>
        { labels.map((label, index) => (
          <div key={labels[index]} style={{display: "inline"}} >
            <Button
              variant={ index === listIndex ? 'dark' : 'light' }
              onClick={ () => {
                setIndex(index);
              } }
            >
              { label }
            </Button>
            { index === labels.length - 1 ? '' : <span>/</span> }
          </div>
        )) }
      </Modal.Title>
    </Modal.Header>
  );
}

export default FilterModalHeader;
