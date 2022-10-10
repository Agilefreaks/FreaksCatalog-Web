import PropTypes from 'prop-types';
import React from 'react';
import { Modal, Tab, Tabs } from 'react-bootstrap';
import InputFilters from '../../../../InputFilters/InputFilters';

function FilterModalHeader({ labels, index: listIndex, setIndex, setInputPattern }) {
  return (
    <>
      <Modal.Header className="pb-0" closeButton>
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
      <InputFilters setFilteredText={ setInputPattern } initialFocus={ true } />
    </>
  );
}

FilterModalHeader.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired,
};

export default FilterModalHeader;
