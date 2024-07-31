export const routes = [
  {
    path: '/',
    name: 'home',
    label: 'HOME',
    navShow: true,
  },
  {
    path: 'posts',
    name: 'posts',
    label: 'POSTS',
    navShow: true,
  },
  {
    path: 'posts/:url',
    name: 'post',
    navShow: false,
    label: 'POSTS',
  },
  {
    path: '/project',
    name: 'project',
    label: 'PROJECTS',
    navShow: true,
  },
  {
    path: '/archive',
    name: 'archive',
    label: 'ARCHIVE',
    navShow: true,
  },
];

export default routes;
