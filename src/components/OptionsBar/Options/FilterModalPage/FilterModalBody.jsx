import React from 'react';
import { Form, Modal } from 'react-bootstrap';

function FilterModalBody({ filters, queuedFilters, onChange }) {
  return (
    <Modal.Body>
      <Form>
        { filters.map((filter) => (
          <div key={ filter.name } className="mb-3">
            <Form.Check
              type="checkbox"
              id={ filter.name }
              defaultChecked={ queuedFilters && !!queuedFilters.current.includes(filter.name) }
              label={ filter.name }
              onChange={ onChange }
            />
          </div>
        )) }
      </Form>
    </Modal.Body>
  );
}

export default FilterModalBody;
