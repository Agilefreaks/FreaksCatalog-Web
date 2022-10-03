import React from 'react';
import { Modal } from 'react-bootstrap';

function FilterModalHeader({ title }) {
  return (
    <Modal.Header closeButton>
      <Modal.Title>{ title }</Modal.Title>
    </Modal.Header>
  );
}

export default FilterModalHeader;
