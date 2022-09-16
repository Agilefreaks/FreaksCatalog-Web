import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo-only-blue.svg';
import projectLogo from '../../images/logo-projects.png';
import homeLogo from '../../images/home.png';
import './PagesMenu.scss';
import MenuItem from './MenuItem';

function PagesMenu() {
  return (
    <div className="menu-container">
      <MenuItem path="/" label="Home" image={ homeLogo } />
      <MenuItem path="/freaks" label="Freaks" image={ logo } />
      <MenuItem path="/" label="Projects" image={ projectLogo } />
    </div>
  );
}

export default PagesMenu;
