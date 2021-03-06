import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/home/Home'
// import Register from '../views/register/Register'
// import Login from '../views/login/Login'
// import Show from '../views/show/Show'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/Home')
  }, {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/register/Register'),
    beforeEnter (to, from, next) {
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Home' }) : next()
    }
  }, {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/Login'),
    beforeEnter (to, from, next) {
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Home' }) : next()
    }
  }, {
    path: '/show/:id',
    name: 'Show',
    component: () => import(/* webpackChunkName: "show" */ '../views/show/Show')
  }, {
    path: '/orderConfirmation/:shopId',
    name: 'OrderConfirmation',
    component: () => import(/* webpackChunkName: "show" */ '../views/orderConfirmation/OrderConfirmation')
  }, {
    path: '/order',
    name: 'Order',
    component: () => import(/* webpackChunkName: "show" */ '../views/order/Order')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage;
  (isLogin || to.name === 'Login' || to.name === 'Register') ? next() : next({ name: 'Login' })
})

export default router
