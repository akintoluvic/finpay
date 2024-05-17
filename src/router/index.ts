import { createWebHistory, createRouter } from 'vue-router'

import Login from '@/pages/auth/Login.vue'
import CreateAccount from '@/pages/auth/CreateAccount.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/signup', component: CreateAccount },
  { path: '/verify-link', component: () => import('@/pages/auth/VerificationLink.vue') },
  { path: '/verified', component: () => import('@/pages/auth/MailVerified.vue') },
  { path: '/verify-code', component: () => import('@/pages/auth/VerificationCode.vue') },
  {
    path: '/dashboard',
    children: [
      { path: '', component: () => import('@/pages/dashboard/Home.vue') },
      // { path: 'invoices', component: Login },
      // { path: 'cards', component: Login },
    ], 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router