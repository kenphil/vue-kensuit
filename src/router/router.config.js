/*
* Author: fengkun
* Create Time: 2020-03-2020/3/13 00:10:38
* */
const routes = [
  {
    path: '/',
    meta: {
      requireAuth: true
    },
    redirect: '/home',
    component: () => import('@pages/layout'),
    children: [
      {
        path: 'home',
        name: 'home',
        meta: {
          requireAuth: true
        },
        component: () => import('@pages/home/home')
      },
      {
        path: 'about',
        meta: {
          requireAuth: true
        },
        component: () => import('@pages/about/about')
      }
    ],
  },
  {
    path: '/login',
    component: () => import('@pages/login/login')
  },
  {
    path: '/404',
    component: () => import('@components/notFound')
  },
  {
    path: '/*',
    redirect: '/404'
  }
]

export default routes
