import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

function FilterModal({ label, filters, filterId, show, setShow }) {
  return (
    <Modal show={ show } onHide={ () => setShow(false) }>
      <Modal.Header closeButton>
        <Modal.Title>{ label }</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          { filters.map((filter) => (
            <div key={ `default-${ filter }` } className="mb-3">
              <Form.Check
                type="checkbox"
                id={ filterId }
                label={ filter.name }
              />
            </div>
          )) }
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={ () => {} }>
          Apply filters
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FilterModal;
