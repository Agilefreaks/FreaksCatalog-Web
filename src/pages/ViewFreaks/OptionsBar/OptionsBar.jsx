import React from 'react';
import { Button } from 'react-bootstrap';
import './options-bar.scss';

function OptionsBar() {
  return (
    <div className="options-bar">
      <Button
        className="options-bar__button"
        variant="outline-secondary"
        onClick={ () => {} }
      >
        Filters
      </Button>
    </div>
  );
}

export default OptionsBar;
