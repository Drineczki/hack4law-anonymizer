import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { getDashboardRoute, getRootRoute } from '~/constants/routes';
import DashboardRoutes from './dashboard';
import NotFoundView from './not-found';

export const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path={getRootRoute()} exact>
        <Redirect to={getDashboardRoute()} />
      </Route>
      <Route path={getDashboardRoute()}>
        <DashboardRoutes />
      </Route>
      <Route>
        <NotFoundView />
      </Route>
    </Switch>
  );
};

export default AppRoutes;
