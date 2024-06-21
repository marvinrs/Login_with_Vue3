import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../components/LoginPage.vue';
import DashboardPage from '../components/DashboardPage.vue';

const routes = [
  { 
    path: '/LoginPage',
    name: 'LoginPage',
    component: LoginPage
   },
  { 
    path: '/DashboardPage', 
    name: 'DashboardPage',
    component: DashboardPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (to.path === '/DashboardPage' && !token) {
    next('/');
  } else {
    next();
  }
});

export default router;
