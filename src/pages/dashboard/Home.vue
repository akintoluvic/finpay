<script lang="ts" setup>
import DashboardLayout from "./layout/DashboardLayout.vue";

import Card from "@/components/Card.vue";
import Look from "@/components/Look.vue";
import { AllAccountsIcon, ConvertIcon, EuroIcon, GbpIcon, InvoicesIcon, NgnIcon, SendIcon, UsdIcon } from "@/components/icons";

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
</script>

<template>
  <DashboardLayout
    title="Welcome Olivia"
    greeting="Good morning, have a great day!"
  >
  <div class="flex flex-col gap-y-10">
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
  </div>
  
</DashboardLayout>
</template>



<style>

</style>