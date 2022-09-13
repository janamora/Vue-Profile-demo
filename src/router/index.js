import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue'
import EmailSignatureView from '../views/EmailSignatureForm.vue'
import EmployeesView from '../views/EmployeesView.vue'
import NewEmployee from '../components/Employees/NewEmployee.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    }
    ,
    {
      path: '/signup',
      name: 'signup',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SignupView.vue')
    },
    {
      path: '/ForgotPassword',
      name: 'ForgotPassword',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ForgotPassword.vue')
    } ,
       {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      requiresAuth: true,
    },
    {
      path: '/employees',
      name: 'employees',
      component: EmployeesView,
      requiresAuth: true,

    },
    {
      path: '/new-employee',
      name: 'new-employee',
      component: NewEmployee,
      requiresAuth: true,

    },
    {
      path: '/email-signature',
      name: 'Email-Signature',
      component: EmailSignatureView,
      requiresAuth: true,
    }
  ]
})

export default router
