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
      { path: 'home', component: () => import('@/pages/dashboard/Home.vue') },
      { path: 'invoices', component: () => import('@/pages/dashboard/Home.vue') },
      { path: 'cards', component: () => import('@/pages/dashboard/Home.vue') },
      { path: 'wallets', component: () => import('@/pages/dashboard/Home.vue') },
      { path: 'transactions', component: () => import('@/pages/dashboard/Home.vue') },
    ], 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router