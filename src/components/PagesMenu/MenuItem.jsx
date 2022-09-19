import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MenuItem({ path, label, image, onClick }) {
  return (
    <Link to={ path }>
      <button type="button" className="menu-container__item" onClick={ onClick }>
        <img className="menu-container__item-img" src={ image } alt={ `${ label } icon` } />
        <p className="menu-container__item-label">{ label }</p>
      </button>
    </Link>
  );
}

MenuItem.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MenuItem;
