const routes = [{
  path: '/',
  component: () => import('layouts/MyLayout.vue'),
  children: [{
      path: '',
      name: 'loginR',
      component: () => import('pages/LoginR.vue')
    },
    {
      path: '/sdashboard',
      name: 'sdashboard',
      component: () => import('pages/Dashboard.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('pages/Profile.vue')
    },
    {
      path: '/schooldept',
      name: 'schooldept',
      component: () => import('pages/SchoolDept.vue')
    },
    {
      path: '/schoolactivities',
      name: 'schoolactivities',
      component: () => import('pages/SchoolActivities.vue')
    },
    {
      path: '/staffs',
      name: 'staffs',
      component: () => import('pages/Staff.vue')
    },
    {
      path: '/forum',
      name: 'forum',
      component: () => import('pages/Forum.vue')
    }
  ]
}]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
