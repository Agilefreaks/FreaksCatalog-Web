import React from 'react';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { store } from './store/store';
import './App.scss';
import './styles/button-add-user.scss';
import Home from './pages/Home/Home';
import ViewFreaks from './pages/ViewFreaks/ViewFreaks';
import ViewFreakPage from './pages/ViewFreakPage/ViewFreakPage';
import Menu from './components/MenuDrawer/Menu';

library.add(faBars, faTimes, faUserPlus);

function App() {
  return (
    <Provider store={ store }>
      <Router>
        <div className="app">
          <div className="app__title">
            <span className="title-letter">F</span>
            <span className="title-letter">R</span>
            <span className="title-letter">E</span>
            <span className="title-letter">A</span>
            <span className="title-letter">K</span>
            <span className="title-letter">S</span>
            <Menu />
          </div>
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
        </div>
      </Router>
    </Provider>
  );
}

export default App;
