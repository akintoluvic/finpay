<script lang="ts" setup>
import DashboardLayout from "../layout/DashboardLayout.vue";
import { InvoicesWhiteIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Card from "@/components/Card.vue";
import { ArrowRightIcon } from "@radix-icons/vue";
import router from "@/router";
import { ChevronLeftIcon } from "@radix-icons/vue";
import { ref } from "vue";
import SuccessOrFail from "@/components/general/SuccessOrFail.vue";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import DatePicker from "@/components/general/DatePicker.vue";

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
  <div class="flex flex-col gap-10 pb-10">
    <div v-if="invoiceStatus === 'not-set'" class="grid grid-cols-2 gap-8">
      <div class="flex flex-col gap-10">
        <Card title="Create Invoice">
          <div class="flex flex-col gap-6 px-8 pt-6 pb-8">
            Create Invoice
            </div>
        </Card>
        <Card title="Invoice Information">
          <div class="flex flex-col gap-6 px-8 pt-6 pb-8">
            Invoice Information
            <Separator />
            <DatePicker />
            <Separator />
            <DatePicker />
          </div>
        </Card>

        <div class="flex flex-col gap-4">
          <div class="flex bg-white items-center justify-between p-2">
            <div>Subtotal</div>
            <div>$20</div>
          </div>
          <Separator />
          <div class="flex items-center justify-between">
            <div>Total</div>
            <div>$20</div>
          </div>
        </div>
      </div>
      <div>
        <Card title="Item Description">
          <div class="flex flex-col gap-6 px-8 pt-6 pb-8">
            
            <div class="grid w-full gap-1.5">
              <Label for="description">Item Description*</Label>
              <Textarea id="description" placeholder="Item Description" />
            </div>
            <Separator />
            <div class="grid w-full items-center gap-1.5">
              <Label for="quantity">Quantity*</Label>
              <Input id="quantity" type="quantity" placeholder="quantity" />
            </div>
            <Separator />
            <div class="grid w-full items-center gap-1.5">
              <Label for="perquantity">Amount per Quantity*</Label>
              <Input id="perquantity" type="perquantity" placeholder="perquantity" />
            </div>


          </div>
        </Card>
        <div class="py-10 flex flex-col gap-4">
          <div>VAT Information*</div>
          <Separator />
          <div class="flex items-center space-x-2">
            <Checkbox id="terms" class="border-primary" />
            <label
              for="terms"
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Should VAT be included?
            </label>
          </div>
        </div>
      </div>
      
    </div>

    <Button 
      v-if="invoiceStatus === 'not-set'"
      @click="generateInvoice"
      class="w-full font-semibold gap-2 mt-16"
    >
      <InvoicesWhiteIcon />
      Create Invoices
      <ArrowRightIcon class="stroke-white" />
    </Button>

    <SuccessOrFail 
      v-if="invoiceStatus === 'success'"
      cardTitle="Invoice Generated"
      :callbackFn="generateAnotherInvoice" 
      :callbackLabel="'Generate Another Invoice'"
      :copyBtnLabel="'Copy Invoice Link'"
      :copyValue="'https://google.com'"
    />

    <button @click="goBack" class="w-full flex items-center gap-2">
      <ChevronLeftIcon class="size-6" />
      Go back
    </button>
  </div>
</DashboardLayout>
</template>
