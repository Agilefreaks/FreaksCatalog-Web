import PropTypes from 'prop-types';
import React from 'react';
import { Form, Modal } from 'react-bootstrap';

function FilterModalBody({ filters, queuedFilters, onChange, filteredText }) {
  const filterTest = (filter) => {
    const filterName = filter.name.toLowerCase();
    const filterPattern = filteredText.toLowerCase();

    return filterName.includes(filterPattern);
  };

  return (
    <Modal.Body>
      <Form>
        { filters.filter(filterTest).map((filter) => (
          <div key={ filter.name } className="mb-3">
            <Form.Check
              type="checkbox"
              id={ filter.name }
              defaultChecked={ queuedFilters && !!queuedFilters.includes(filter.name) }
              label={ filter.name }
              onChange={ onChange }
            />
          </div>
        )) }
      </Form>
    </Modal.Body>
  );
}

FilterModalBody.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  queuedFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  filteredText: PropTypes.string,
};

export default FilterModalBody;
