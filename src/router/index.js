import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/sample',
      name: 'sample',
      component: () => import('../views/SampleView.vue')
    },
    {
      path: '/sample2',
      name: 'sample2',
      component: () => import('../views/Sample2View.vue')
    },
    {
      path: '/nest',
      name: 'nest',
      component: () => import('../views/NestView.vue'),
      children: [
        {
          path: '',
          name: 'default',
          component: () => import('../views/NestChildDefaultView.vue')
        },
        {
          path: 'child',
          name: 'child',
          component: () => import('../views/NestChildView.vue')
        },
        {
          path: ':id',
          name: 'dynamic',
          component: () => import('../views/DynamicView.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
