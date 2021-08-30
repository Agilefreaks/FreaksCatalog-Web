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
        <div className="app__content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/freaks/:id">
              <ViewFreakPage />
            </Route>
          </Switch>
        </div>
        <div className="app__nav">
          <button type="button" className="app__agile">
            <img className="app__agile-img" src="https://d30anih4i5atxe.cloudfront.net/uploads/bc2a1f67-7297-4ad4-ba62-d70042ad43cc.png" alt="Nav" />
          </button>
        </div>
      </div>
    </Router>
  );
}

export default App;
