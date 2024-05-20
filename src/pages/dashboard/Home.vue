<script lang="ts" setup>
import DashboardLayout from "./layout/DashboardLayout.vue";

import Card from "@/components/Card.vue";
import Look from "@/components/Look.vue";
import { AllAccountsIcon, EuroIcon, GbpIcon, NgnIcon, UsdIcon } from "@/components/icons";

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
                <div class="text-slate-600 text-xs font-normal font-['Inter'] leading-tight">Available Balance</div>
                <div class="text-slate-800 text-2xl font-semibold font-['Inter'] leading-9">${{ account.balance }}</div>
              </div>
            </div>
          </Card>
      </div>
    </Card>
  </div>
  
</DashboardLayout>
</template>



<style>

</style>