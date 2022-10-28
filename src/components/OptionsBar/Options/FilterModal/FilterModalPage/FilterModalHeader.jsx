import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { Modal, Tab, Tabs } from 'react-bootstrap';
import InputFilters from '../../../../InputFilters/InputFilters';

function FilterModalHeader({ labels, index, setIndex, setFilteredText }) {
  const filteredTextTabs = useRef([]);

  const updateRelativeFilteredText = (text) => {
    filteredTextTabs[index] = text;
    setFilteredText(text);
  };

  useEffect(() => {
    setFilteredText(filteredTextTabs[index] ?? '');
  }, [ index ]);

  return (
    <>
      <Modal.Header className="pb-0" closeButton>
        <Modal.Title>
          <Tabs
            defaultActiveKey={ index }
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
      <InputFilters
        setFilteredText={ updateRelativeFilteredText }
        initialFocus={ true }
        currentText={ filteredTextTabs[index] }
      />
    </>
  );
}

FilterModalHeader.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired,
  setFilteredText: PropTypes.func.isRequired,
};

export default FilterModalHeader;
