import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import './styles/button-add-user.scss';
import Home from './pages/Home/Home';
import ViewFreakPage from './pages/ViewFreakPage/ViewFreakPage';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app__title"><h1>FREAKS</h1></div>
        <div className="app-content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/freaks/:id">
              <ViewFreakPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
