import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './AppButton.scss';

function AppButton({ btnText, btnType, btnStyle, btnVariant, form }) {
  return (
    <Button
      form={ form }
      variant={ btnVariant }
      className={ `app-button ${ btnStyle }` }
      type={ btnType }
    >
      { btnText }
    </Button>
  );
}

AppButton.propTypes = {
  btnStyle: PropTypes.string,
  btnType: PropTypes.string,
  btnText: PropTypes.string.isRequired,
  btnVariant: PropTypes.string,
  form: PropTypes.string,
};

AppButton.defaultProps = {
  btnStyle: null,
  btnType: null,
  btnVariant: null,
  form: null,
};

export default AppButton;
