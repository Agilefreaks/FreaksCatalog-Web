import PropTypes from 'prop-types';
import React from 'react';
import { Modal, Tab, Tabs } from 'react-bootstrap';

function FilterModalHeader({ labels, index: listIndex, setIndex }) {
  return (
    <Modal.Header closeButton>
      <Modal.Title>
        <Tabs
          defaultActiveKey={ listIndex }
          id="filter-tabs"
          className="mb-3"
          onSelect={ (i) => {
            setIndex(Number(i));
          } }
        >
          { labels.map((label, tabIndex) => (
            <Tab key={ label } eventKey={ tabIndex } title={ label } />
          )) }
        </Tabs>
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
