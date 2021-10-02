import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import DashboardLayout from '~/components/DashboardLayout';
import { getDashboardHomeRoute, getDashboardRoute, getDocumentUploadRoute } from '~/constants/routes';
import DashboardHomeView from './home';
import DocumentUploadView from './document-upload';

export const DashboardRoutes: React.FC = () => {
  return (
    <DashboardLayout>
      <Switch>
        <Route path={getDashboardHomeRoute()}>
          <DashboardHomeView />
        </Route>
        <Route path={getDocumentUploadRoute()}>
          <DocumentUploadView />
        </Route>

        <Route path={getDashboardRoute()}>
          <Redirect to={getDashboardHomeRoute()} />
        </Route>
      </Switch>
    </DashboardLayout>
  );
};

export default DashboardRoutes;
