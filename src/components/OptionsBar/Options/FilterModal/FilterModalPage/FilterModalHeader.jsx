import PropTypes from 'prop-types';
import React from 'react';
import { Button, Modal } from 'react-bootstrap';

function FilterModalHeader({ labels, index: listIndex, setIndex }) {
  return (
    <Modal.Header closeButton>
      <Modal.Title>
        { labels.map((label, index) => (
          <div key={ labels[index] } style={ { display: 'inline' } }>
            <Button
              variant={ index === listIndex ? 'light' : 'link' }
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

FilterModalHeader.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired,
};

export default FilterModalHeader;
