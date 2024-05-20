<script lang="ts" setup>
import DashboardLayout from "./layout/DashboardLayout.vue";

import Card from "@/components/Card.vue";
import Look from "@/components/Look.vue";
import { AllAccountsIcon, ConvertIcon, EuroIcon, GbpIcon, HomeIcon, InvoicesIcon, InvoicesWhiteIcon, NgnIcon, SendIcon, UsdIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ref } from "vue";

const accounts = ref({
  all: {
    balance: 5000,
    name: "All Accounts",
    icon: AllAccountsIcon
  },
  usd: {
    balance: 1500,
    name: "USD",
    icon: UsdIcon,
    symbol: "$",
  },
  gbp: {
    balance: 1000,
    name: "GBP",
    icon: GbpIcon,
    symbol: "£",
  },
  eur: {
    balance: 1100,
    name: "EUR",
    icon: EuroIcon,
    symbol: "€",
  },
  ngn: {
    balance: 1400,
    name: "NGN",
    icon: NgnIcon,
    symbol: "₦",
  }
})

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

const exchangeRates = ref({
  eur: {
    currency: "EUR",
    buying: 1320,
    selling: 1390,
    icon: EuroIcon,
    symbol: "€",
  },
  gbp: {
    currency: "GBP",
    buying: 1755,
    selling: 1852,
    icon: GbpIcon,
    symbol: "£",
  },
  usd: {
    currency: "USD",
    buying: 1320,
    selling: 1245,
    icon: UsdIcon,
    symbol: "$",
  },
})

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
            class="flex gap-x-4 px-8 py-7 even:bg-background"
          >
            <HomeIcon />
            <div class="flex flex-col">
              <p class="font-semibold">{{ account.title }}</p>
              <span class="text-xs text-muted-foreground max-w-80">{{ account.description}}</span>
            </div>
          </div>
        </div>
      </Card>
      <Card title="Invoices">
        <div class="flex flex-col px-6 pb-8">
          <div class="flex flex-col divide-y">
            <div class="flex justify-between py-5">
              <span>0 Person</span>
              <Badge variant="destructive">Due</Badge>
            </div>
            <div class="flex justify-between py-5">
              <span>0 Person</span>
              <Badge variant="destructive">Overdue</Badge>
            </div>
            <div class="flex justify-between py-5">
              <span>0 Person</span>
              <Badge variant="secondary">Awaiting approval</Badge>
            </div>
          </div>
          <div class="text-transparent">.</div>

          <Button class="flex font-semibold item-center gap-2">
            <InvoicesWhiteIcon />
            Create new invoice
          </Button>
        </div>
      </Card>
    </div>

    <div class="grid grid-cols-3 gap-4">
      <Card title="Exchange Rates" class="col-span-2">
        <div class="px-6">
        <table 
          v-for="rate in exchangeRates"
          :key="rate.currency" 
          class="table-fixed w-full text-xs text-muted-foreground text-center my-3 px-6"
        >
          <thead class="border-b">
            <tr>
              <th class="font-normal text-left py-2">Currency</th>
              <th class="font-normal">Buying</th>
              <th class="font-normal">Selling</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="flex items-center gap-x-2 text-base font-semibold py-2 text-left">
                <HomeIcon />
                {{ rate.currency }} {{ rate.symbol }}
              </td>
              <td>₦{{ rate.buying }}</td>
              <td>₦{{ rate.selling }}</td>
            </tr>
          </tbody>
        </table>
        </div>
      </Card>
      <Card title="sjd"></Card>
    </div>

  </div>
</DashboardLayout>
</template>



<style>

</style>