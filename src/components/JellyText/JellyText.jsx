import React from 'react';
import PropTypes from 'prop-types';
import './jellyLetter.scss';

function JellyText({ text }) {
  let ct = 0;

  return (
    <>
      { [ ...text ].map((letter) => (
        <span className="jelly-letter" key={ `jellyLetter${ ct++ }` }>
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
