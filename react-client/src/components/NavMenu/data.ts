import { getDashboardHomeRoute, getAnonymizerRoute } from '~/constants/routes';
import { SupportedIcon } from '../Icon';

export const menu = [
  {
    id: 1,
    icon: 'home' as SupportedIcon,
    text: 'Strona glowna',
    path: getDashboardHomeRoute
  },
  {
    id: 2,
    icon: 'document' as SupportedIcon,
    text: 'Anonimizuj',
    path: getAnonymizerRoute
  }
];