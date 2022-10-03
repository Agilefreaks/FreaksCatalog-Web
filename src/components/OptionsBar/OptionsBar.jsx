import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup } from 'react-bootstrap';

function OptionsBar({ children }) {
  return <ButtonGroup className="w-100">{ children }</ButtonGroup>;
}

OptionsBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default OptionsBar;
