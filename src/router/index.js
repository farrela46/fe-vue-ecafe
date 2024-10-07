import { createRouter, createWebHistory } from 'vue-router'
import AOS from "aos";
import 'aos/dist/aos.css';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/menu',
      name: 'Menu',
      component: () => import('../views/OurMenusView.vue')
    },
    {
      path: '/teams',
      name: 'OurTeams',
      component: () => import('../views/OurTeams.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  AOS.init(); 
  next();
});

export default router
