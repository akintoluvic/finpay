import { createWebHistory, createRouter } from 'vue-router'

import Login from '@/pages/auth/Login.vue'
import CreateAccount from '@/pages/auth/CreateAccount.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/signup', component: CreateAccount },
  { path: '/verify-link', component: () => import('@/pages/auth/VerificationLink.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router