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
      { 
        path: 'home', 
        component: () => import('@/pages/dashboard/home/Overview.vue'),
      },
      { 
        path: 'invoices',
        children: [
          { path: '', component: () => import('@/pages/dashboard/invoices/Invoices.vue') },
          { path: 'new', component: () => import('@/pages/dashboard/invoices/NewInvoice.vue') },
        ]
      },
      { path: 'cards', component: () => import('@/pages/dashboard/cards/Cards.vue') },
      { 
        path: 'wallets', 
        children: [
          { path: '', component: () => import('@/pages/dashboard/wallets/Wallets.vue'), },
          { path: 'send', component: () => import('@/pages/dashboard/wallets/SendMoney.vue'), },
        ]
      },
      { path: 'transactions', component: () => import('@/pages/dashboard/transactions/Transactions.vue') },
    ], 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router