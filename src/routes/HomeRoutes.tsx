import { lazy } from 'react';

import { HOME_URL } from '@configs';
import { Loadable } from '@components';

const HomePage = Loadable(lazy(() => import('@pages/home/Home')));

export const HomeRoutes = {
  path: HOME_URL,
  element: <HomePage />,
};
