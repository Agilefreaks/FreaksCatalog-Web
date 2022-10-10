import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Form, Modal } from 'react-bootstrap';
import InputFilters from '../../../../InputFilters/InputFilters';

function FilterModalBody({ filters, queuedFilters, onChange }) {
  const [ inputPattern, setInputPattern ] = useState('');

  const filterTest = (filter) => {
    const filterName = filter.name.toLowerCase();
    const filterPattern = inputPattern.toLowerCase();

    return filterName.includes(filterPattern);
  };

  return (
    <Modal.Body>
      <InputFilters isOpen={ true } setFilteredText={ setInputPattern } />
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
};

export default FilterModalBody;
