import { HOME_ROUTE, VIDEO_ROUTE } from './routesConsts';

import { Home, Video } from '../pages';

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    element: <Home />,
    name: 'Home',
  },
  {
    path: VIDEO_ROUTE + '/:id/*',
    element: <Video />,
    name: 'Video',
  },
];
