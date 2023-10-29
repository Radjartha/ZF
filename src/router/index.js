import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import about from '../views/About.vue'
import portfolio from '../views/portfolio.vue'
import contact from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: about
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: portfolio
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: contact
    },
    {
      path: '/project/:id',
      name: 'project',
      component: () => import('../views/Project.vue')
    },
  ]
})

export default router
