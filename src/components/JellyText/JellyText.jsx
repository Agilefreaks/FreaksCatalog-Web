import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import './jellyLetter.scss';

function JellyText({ text }) {
  return (
    <>
      { text.split('').map((letter) => (
        <span className="jelly-letter" key={ `jellyLetter${ uuid() }` }>
          { letter }
        </span>
      )) }
    </>
  );
}

JellyText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default JellyText;
