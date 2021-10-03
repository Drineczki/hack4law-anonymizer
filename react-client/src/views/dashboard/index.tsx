import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import DashboardLayout from '~/components/DashboardLayout';
import {
  getAnonymizerRoute,
  getDashboardHomeRoute,
  getDashboardRoute,
  getDocumentUploadRoute,
  getNoFilesRoute,
} from '~/constants/routes';
import DashboardHomeView from './home';
import DocumentUploadView from './document-upload';
import AnonymizerView from './anonymizer';
import NoFileView from './noFile';

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
        <Route path={getAnonymizerRoute()}>
          <AnonymizerView />
        </Route>
        <Route path={getNoFilesRoute()}>
          <NoFileView />
        </Route>

        <Route path={getDashboardRoute()}>
          <Redirect to={getDashboardHomeRoute()} />
        </Route>
      </Switch>
    </DashboardLayout>
  );
};

export default DashboardRoutes;
