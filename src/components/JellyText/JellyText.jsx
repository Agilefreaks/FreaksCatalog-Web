import React from 'react';
import PropTypes from 'prop-types';
import './jellyLetter.scss';

function JellyText({ text }) {
  return (
    <>
      { [ ...text ].map((letter) => (
        <span className="jelly-letter">{ letter }</span>
      )) }
    </>
  );
}

JellyText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default JellyText;
