import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../../pages/Home/Home';
import ViewFreaks from '../../pages/ViewFreaks/ViewFreaks';
import ViewFreakPage from '../../pages/ViewFreakPage/ViewFreakPage';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Switch location={ location } key={ location.pathname }>
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
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
