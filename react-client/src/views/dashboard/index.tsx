import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import DashboardLayout from '~/components/DashboardLayout';
import { getDashboardHomeRoute, getDashboardRoute } from '~/constants/routes';
import DashboardHomeView from './home';

export const DashboardRoutes: React.FC = () => {
  return (
    <DashboardLayout>
      <Switch>
        <Route path={getDashboardHomeRoute()}>
          <DashboardHomeView />
        </Route>
        <Route path={getDashboardRoute()}>
          <Redirect to={getDashboardHomeRoute()} />
        </Route>
      </Switch>
    </DashboardLayout>
  );
};

export default DashboardRoutes;
