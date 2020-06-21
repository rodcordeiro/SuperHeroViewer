import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HerosPage from './pages/HerosPage';

function Router({ match, location }) {
  return (
    <BrowserRouter>
      <Switch>
       <Route path='/' component={HerosPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
