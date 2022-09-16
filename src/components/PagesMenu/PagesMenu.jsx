import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo-only-blue.svg';
import projectLogo from '../../images/logo-projects.png';
import homeLogo from '../../images/home.png';
import './PagesMenu.scss';

function PagesMenu() {
  return (
    <div className="menu-container">
      <Link to="/">
        <button type="button" className="menu-container__item">
          <img className="menu-container__item-img" src={ homeLogo } />
          <p>Home</p>
        </button>
      </Link>
      <Link to="/freaks">
        <button type="button" className="menu-container__item">
          <img className="menu-container__item-img" src={ logo } />
          <p>Freaks</p>
        </button>
      </Link>
      <Link to="/">
        <button type="button" className="menu-container__item">
          <img className="menu-container__item-img" src={ projectLogo } />
          <p>Projects</p>
        </button>
      </Link>
    </div>
  );
}

export default PagesMenu;
