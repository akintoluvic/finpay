<script lang="ts" setup>
import { Input } from "@/components/ui/input";
import DashboardLayout from "../layout/DashboardLayout.vue";
import { FilterIcon, InvoicesWhiteIcon, SearchIcon, SuccessIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Card from "@/components/Card.vue";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-icons/vue";
import router from "@/router";
import { ChevronLeftIcon } from "@radix-icons/vue";
import { ref } from "vue";

type InvoiceStatus = 'success' | 'error' | 'not-set'

const invoiceStatus = ref<InvoiceStatus>('not-set');

const goBack = () => {
  invoiceStatus.value = 'not-set'
  router && router.go(-1)
}

const generateInvoice = () => {
  invoiceStatus.value = 'success'
  router.push({query: {status: invoiceStatus.value}})
}

const generateAnotherInvoice = () => {
  invoiceStatus.value = 'not-set'
  router && router.go(-1)
}

</script>
<template>
  <DashboardLayout
    title="New Invoice"
  >
  <div class="flex flex-col gap-10">
    <div v-if="invoiceStatus === 'not-set'" class="grid grid-cols-2 gap-8">
      <div>
        <Card title="Create Invoice">
          <div class="flex flex-col px-8">
            Create Invoice
            </div>
        </Card>
      </div>
      <div>
        <Card title="Item Description">
          <div class="flex flex-col">
            Item Description
            </div>
        </Card>
      </div>
      
    </div>

    <Button 
      v-if="invoiceStatus === 'not-set'"
      @click="generateInvoice"
      class="w-full font-semibold gap-2"
    >
      <InvoicesWhiteIcon />
      Create Invoices
      <ArrowRightIcon class="stroke-white" />
    </Button>

    <Card title="Invoice Generated" v-if="invoiceStatus === 'success'" class="max-w-[607px]">
      <div class="flex flex-col items-center gap-2 max-w-96 mx-auto pt-12">
          <SuccessIcon />
        <Button class="w-full text-primary bg-primary/5 hover:text-white font-semibold gap-2 mb-4 mt-10">
          Copy invoice link
        </Button>
        <Button @click="generateAnotherInvoice" class="w-full font-semibold gap-2 mb-14">
          Create another invoice
          <ArrowRightIcon class="stroke-white" />
        </Button>
        <RouterLink to="/dashboard/home" class="text-center text-primary mb-12 gap-2 hover:underline">
          Back to Dashboard
        </RouterLink>
      </div>
    </Card>

    <button @click="goBack" class="w-full flex items-center gap-2">
      <ChevronLeftIcon class="size-6" />
      Go back
    </button>
  </div>
</DashboardLayout>
</template>
