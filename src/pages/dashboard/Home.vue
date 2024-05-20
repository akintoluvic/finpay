<script lang="ts" setup>
import DashboardLayout from "./layout/DashboardLayout.vue";

import Card from "@/components/Card.vue";
import Look from "@/components/Look.vue";
import { AllAccountsIcon, ConvertIcon, EuroIcon, GbpIcon, InvoicesIcon, NgnIcon, SendIcon, UsdIcon } from "@/components/icons";
import { title } from "process";

const accounts = {
  all: {
    balance: 5000,
    name: "All Accounts",
    icon: AllAccountsIcon
  },
  usd: {
    balance: 1500,
    name: "USD",
    icon: UsdIcon
  },
  gbp: {
    balance: 1000,
    name: "GBP",
    icon: GbpIcon,
  },
  eur: {
    balance: 1100,
    name: "EUR",
    icon: EuroIcon
  },
  ngn: {
    balance: 1400,
    name: "NGN",
    icon: NgnIcon,
  }
}

const quickActions = {
  send: {
    title: "Send Money",
    icon: SendIcon,
    url: "/send",
    color: "blue",
  },
  convert: {
    title: "Convert",
    icon: ConvertIcon,
    url: "/convert",
    color: "green",
  },
  createInvoice: {
    title: "Create new invoice",
    icon: InvoicesIcon,
    url: "/create-invoice",
    color: "yellow",
  }
}

const receivePayments = {
  usd: {
    title: "US Dollar",
    description: "Wire routing number, Bank code (SWIFT/BIC), Routing number (ACH or ABA), Account number",
  },
  pounds: {
    title: "British Pounds",
    description: "UK sirt code, Account bumber, IBAN",
  },
  euros: {
    title: "Euros",
    description: "IBAN, Bank code (SWIFT/IBC)",
  }
}
</script>

<template>
  <DashboardLayout
    title="Welcome Olivia"
    greeting="Good morning, have a great day!"
  >
  <div class="flex flex-col gap-y-10 mb-16">
    <Card
          title="Account Balance"
        >
      <div class="grid grid-cols-5 px-8 gap-4 pt-8 pb-10">
          <Card
            v-for="account in accounts"
            :key="account.name"
            title="Tasks"
            :reverseBg="true"
            :heightSmall="true"
          >
            <template #action-button>
              <div class="flex items-center gap-2">
                <component :is="account.icon" />
                <p class="font-bold">{{ account.name }}</p>
              </div>
            </template>
            <div class="px-4 pb-7 pt-11">
              <div class="flex-col justify-center items-start gap-1 flex">
                <div class="text-slate-600 text-xs font-normal leading-tight">Available Balance</div>
                <div class="text-slate-800 text-2xl font-semibold leading-9">${{ account.balance }}</div>
              </div>
            </div>
          </Card>
      </div>
    </Card>

    <Card title="Quick Actions">
      <div class="grid grid-cols-3 px-8 py-8 gap-4">
        <RouterLink 
          v-for="action in quickActions" 
          :key="action.title" 
          :to="action.url" 
          class=" border-2 py-6 rounded-lg"
          :class="{
            'text-blue bg-blue-foreground hover:bg-blue-border border-2 border-blue-border': action.color === 'blue',
            'text-green bg-green-foreground hover:bg-green-border border-2 border-green-border': action.color === 'green',
            'text-yellow bg-yellow-foreground hover:bg-yellow-border border-2 border-yellow-border': action.color === 'yellow',
            }"
        >
          <div class="flex items-center justify-center gap-2">
            <component :is="action.icon" />
            <span class="font-semibold">{{ action.title }}</span>
          </div>
        </RouterLink>
      </div>
    </Card>

    <div class="grid grid-cols-2 gap-4">
      <Card title="Recieve Payments">
        <div class="flex flex-col">
          <div 
            v-for="account in receivePayments"
            :key="account.title"
            class="flex gap-x-4 px-8 py-7"
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="40" height="40" rx="20" fill="#7308E9" fill-opacity="0.1"/>
  <path d="M13 17V25M17.5 17V25M22.5 17V25M27 17V25M11 26.6L11 27.4C11 27.9601 11 28.2401 11.109 28.454C11.2049 28.6422 11.3578 28.7952 11.546 28.891C11.7599 29 12.0399 29 12.6 29H27.4C27.9601 29 28.2401 29 28.454 28.891C28.6422 28.7952 28.7951 28.6422 28.891 28.454C29 28.2401 29 27.9601 29 27.4V26.6C29 26.04 29 25.7599 28.891 25.546C28.7951 25.3579 28.6422 25.2049 28.454 25.109C28.2401 25 27.9601 25 27.4 25H12.6C12.0399 25 11.7599 25 11.546 25.109C11.3578 25.2049 11.2049 25.3579 11.109 25.546C11 25.7599 11 26.04 11 26.6ZM19.6529 11.0772L12.2529 12.7216C11.8059 12.8209 11.5823 12.8706 11.4155 12.9908C11.2683 13.0969 11.1527 13.2409 11.0811 13.4076C11 13.5965 11 13.8255 11 14.2835L11 15.4C11 15.9601 11 16.2401 11.109 16.454C11.2049 16.6422 11.3578 16.7952 11.546 16.891C11.7599 17 12.0399 17 12.6 17H27.4C27.9601 17 28.2401 17 28.454 16.891C28.6422 16.7952 28.7951 16.6422 28.891 16.454C29 16.2401 29 15.9601 29 15.4V14.2835C29 13.8255 29 13.5965 28.9188 13.4076C28.8473 13.2409 28.7317 13.0969 28.5845 12.9908C28.4177 12.8706 28.1942 12.8209 27.7471 12.7216L20.3471 11.0772C20.2176 11.0484 20.1528 11.034 20.0874 11.0282C20.0292 11.0231 19.9708 11.0231 19.9126 11.0282C19.8472 11.034 19.7824 11.0484 19.6529 11.0772Z" stroke="#7308E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>

            <div class="flex flex-col">
              <p class="font-semibold">{{ account.title }}</p>
              <span class="text-xs text-muted-foreground">{{ account.description}}</span>
            </div>
          </div>
        </div>
      </Card>
      <Card title="Invoices">

      </Card>
    </div>
  </div>
  
</DashboardLayout>
</template>



<style>

</style>