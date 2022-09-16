import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../images/logo-only-blue.svg';
import projectLogo from '../../images/logo-projects.png';
import homeLogo from '../../images/home.png';
import './PagesMenu.scss';
import MenuItem from './MenuItem';

function PagesMenu({ onClick }) {
  return (
    <div className="menu-container">
      <MenuItem path="/" label="Home" image={ homeLogo } onClick={ onClick } />
      <MenuItem path="/freaks" label="Freaks" image={ logo } onClick={ onClick } />
      <MenuItem path="/" label="Projects" image={ projectLogo } onClick={ onClick } />
    </div>
  );
}

PagesMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PagesMenu;
