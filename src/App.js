import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.scss';
import './styles/button-add-user.scss';
import Home from './pages/Home/Home';
import ViewFreaks from './pages/ViewFreaks/ViewFreaks';
import ViewFreakPage from './pages/ViewFreakPage/ViewFreakPage';
import logo from './images/logo-only-blue.svg';
import projectLogo from './images/logo-projects.png';
import homeLogo from './images/home.png';

library.add(faTimes, faUserPlus);

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app__title"><h1>FREAKS</h1></div>
        <div className="app__content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/freaks">
              <ViewFreaks />
            </Route>
            <Route exact path="/freaks/:id">
              <ViewFreakPage />
            </Route>
          </Switch>
        </div>
        <div className="app__nav">
          <Link to="/">
            <button type="button" className="nav__button">
              <FontAwesomeIcon icon="home" />
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
              <FontAwesomeIcon icon="tasks" />
              <p>Projects</p>
            </button>
          </Link>
        </div>
      </div>
    </Router>
  );
}

export default App;
