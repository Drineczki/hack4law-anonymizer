import React from 'react';
import { Route, Switch } from 'react-router';
import NotFoundView from './not-found';

export const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route>
        <NotFoundView />
      </Route>
    </Switch>
  );
};

export default AppRoutes;
