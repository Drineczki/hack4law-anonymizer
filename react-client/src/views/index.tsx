import React from 'react';
import { Route, Switch } from 'react-router';
import { getHomeRoute, getRootRoute } from '~/constants/routes';
import DashboardView from './dashboard';
import NotFoundView from './not-found';

export const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path={getRootRoute()}>
        <DashboardView />
      </Route>
      <Route path={getHomeRoute()}>
        <DashboardView />
      </Route>
      <Route>
        <NotFoundView />
      </Route>
    </Switch>
  );
};

export default AppRoutes;
