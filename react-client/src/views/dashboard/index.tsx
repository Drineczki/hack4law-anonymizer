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
import AnonymizerView from './anonymizer';
import NoFileView from './noFile';

export const DashboardRoutes: React.FC = () => {
  return (
    <DashboardLayout>
      <Switch>
        <Route path={getDashboardHomeRoute()} exact>
          <Redirect to={getNoFilesRoute()} />
        </Route>
        <Route path={getAnonymizerRoute()}>
          <AnonymizerView />
        </Route>
        <Route path={getNoFilesRoute()}>
          <NoFileView />
        </Route>

        <Route>
          <Redirect to={getNoFilesRoute()} />
        </Route>
      </Switch>
    </DashboardLayout>
  );
};

export default DashboardRoutes;
