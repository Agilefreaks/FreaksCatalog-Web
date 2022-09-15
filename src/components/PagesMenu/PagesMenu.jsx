import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo-only-blue.svg';
import projectLogo from '../../images/logo-projects.png';
import homeLogo from '../../images/home.png';

function PagesMenu() {
  return (
    <div className="app__nav">
      <Link to="/">
        <button type="button" className="nav__button">
          <img className="nav__button-img" src={ homeLogo } alt="Nav" />
          <p>Home</p>
        </button>
      </Link>
      <Link to="/freaks">
        <button type="button" className="nav__button">
          <img className="nav__button-img" src={ logo } alt="Nav" />
          <p>Freaks</p>
        </button>
      </Link>
      <Link to="/">
        <button type="button" className="nav__button">
          <img className="nav__button-img" src={ projectLogo } alt="Nav" />
          <p>Projects</p>
        </button>
      </Link>
    </div>
  );
}

export default PagesMenu;
