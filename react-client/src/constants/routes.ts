export const getRootRoute = () => '/';

export const getHomeRoute = () => '/home';

export const getDashboardRoute = () => '/dashboard';
export const getDashboardHomeRoute = () => `${getDashboardRoute()}/home`;
export const getDocumentUploadRoute = () => `${getDashboardRoute()}/upload`;
export const geAnonymizerRoute = () => `${getDashboardRoute()}/anonymizer`;
