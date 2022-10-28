import React from 'react';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faCaretDown,
  faTimes,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import JellyText from './components/JellyText/JellyText';
import { store } from './store/store';
import './App.scss';
import Home from './pages/Home/Home';
import ViewFreaks from './pages/ViewFreaks/ViewFreaks';
import ViewFreakPage from './pages/ViewFreakPage/ViewFreakPage';
import Menu from './components/MenuDrawer/Menu';

library.add(faBars, faCaretDown, faTimes, faUserPlus);

function App() {
  return (
    <Provider store={ store }>
      <Router>
        <div className="app">
          <div className="app__title">
            <JellyText text="FREAKS" />
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
