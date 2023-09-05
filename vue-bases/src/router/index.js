import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/parent',
    name: 'parent',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "parent" */ '../components/ParentComponent.vue')
  },
  {
    path: '/parentprops',
    name: 'parentprops',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "props" */ '../components/ParentComponentProps.vue')
  },
  {
    path: '/store',
    name: 'store',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "store" */ '../components/StoreComponent.vue')
  },
  {
    path: '/slots',
    name: 'slots',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "slots" */ '../components/SlotsComponent.vue')
  },
  {
    path: '/composables',
    name: 'composables',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "slots" */ '../components/ComposableComponent.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
