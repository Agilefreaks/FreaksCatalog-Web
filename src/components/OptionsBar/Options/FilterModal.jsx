import React, { useState, useRef } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getFilterSetter, getFilterResetter } from '../../../filters/freaksFilter';

function FilterModal({ label, filters, filterId, show, setShow }) {
  const queuedFilters = useRef([]);
  const dispatch = useDispatch();

  const updateSelectedFilters = (event) => {
    const filter = event.target.id;
    queuedFilters.current = [ ...queuedFilters.current ];

    const index = queuedFilters.current.indexOf(filter);
    if (index !== -1) {
      queuedFilters.current.splice(index, 1);
    } else {
      queuedFilters.current.push(filter);
    }
  };

  const applyFilters = () => {
    const setFilter = getFilterSetter(filterId);

    if (setFilter !== null) {
      dispatch(setFilter(queuedFilters.current));
    }

    setShow(false);
  };

  const resetModal = () => {
    queuedFilters.current = [];

    const filterResetter = getFilterResetter(filterId);

    if (filterResetter !== null) {
      dispatch(filterResetter());
    }

    setShow(false);
  };

  return (
    <Modal show={ show } onHide={ () => setShow(false) }>
      <Modal.Header closeButton>
        <Modal.Title>{ label }</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          { filters.map((filter) => (
            <div key={ `${ filterId }-${ filter.name }` } className="mb-3">
              <Form.Check
                type="checkbox"
                id={ filter.name }
                defaultChecked={ !!queuedFilters.current.includes(filter.name) }
                label={ filter.name }
                onChange={ updateSelectedFilters }
              />
            </div>
          )) }
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={ applyFilters }>
          Apply filters
        </Button>
        <Button variant="secondary" onClick={ resetModal }>
          Reset filters
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FilterModal;
