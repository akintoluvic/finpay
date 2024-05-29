<script lang="ts" setup>
import Card from "@/components/Card.vue";
import DashboardLayout from "../layout/DashboardLayout.vue";
import { Button } from "@/components/ui/button";
import { ConvertIcon, HomeIcon } from "@/components/icons";
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@radix-icons/vue";
import router from "@/router";
import { ref } from "vue";
import SuccessOrFail from "@/components/general/SuccessOrFail.vue";
import { h } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/toast/use-toast'

const sendData = ref({
  step: 1, 
  type: '', 
  sourceWallet: '',
  amountToConvert: '', 
  amountToReceive: '',
  destinationWallet: '',
})

const formSchema = toTypedSchema(z.object({
  occupation: z.string().min(2).max(50),
  physicalAddress: z.coerce.number({
    required_error: "Field is required",
    invalid_type_error: "Values must be a number",
  }).max(5000, "Insufficient balance"),
}))

const { isFieldDirty, handleSubmit } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit((values) => {
  console.log(JSON.stringify(values, null, 2))
  nextStep()
  toast({
    title: 'You submitted the following values:',
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
  })
})

const convertValue = (val: string) => {
  console.log(typeof val)
  if(!val) return
  sendData.value.amountToReceive = (parseFloat(val) / 1.5).toFixed(2) + ''
}
const goBack = () => {
  router && router.go(-1)
  if (sendData.value.step === 2)
    sendData.value.step -= 1
}

const nextStep = () => {
  

  switch (sendData.value.step) {
    case 1:
      sendData.value.step += 1
      router && router.push({ query: { 
        type: sendData.value.type, 
        step: sendData.value.step 
      } })
      break;
    case 2:
      sendData.value.step += 1
      break;
  
    default:
      sendData.value.step = 1
      break;
  }
}

</script>
<template>
  <DashboardLayout
    title="Convert Funds"
  >
  <div class="max-w-[607px]">
    <Card v-if="sendData.step === 1" title="Convert Funds">
      <div class="flex flex-col gap-10 px-8 pb-12 pt-8">
        <form class="grid grid-cols-1 gap-y-10" @submit="onSubmit">
              <FormField v-slot="{ componentField }" name="physicalAddress" :validate-on-blur="!isFieldDirty">
                <FormItem>
                  <FormLabel>
                    Amount to Convert<span class="text-red">*</span>
                  </FormLabel>
                  <FormControl>
                    <div class="relative w-full items-center">
                      <span class="absolute start-0 inset-y-0 border-l text-primary my-2 flex items-center justify-center px-4 mr-0.5">
                        <div class="text-2xl text-muted-foreground/50">$</div>
                      </span>
                      <Input
                        type="text" 
                        placeholder="0.00" 
                        v-bind="componentField" 
                        @update:modelValue="convertValue($event + '')" 
                        class="pr-10 pl-20 text-[32px] font-medium text-secondary placeholder:text-secondary/50" 
                      />
                      <span class="absolute end-0 inset-y-0 border-l text-primary my-2 flex items-center justify-center px-4 mr-0.5">
                        <div>Edit</div>
                      </span>
                    </div>
                  </FormControl>
                  
                  <div class="relative bg-secondary-foreground rounded-lg h-[68px] mt-2">
                    <FormMessage class="px-4 pt-1" />
                    <div class="absolute bottom-6 w-full flex items-center justify-between text-muted-foreground px-4 text-xs">
                      <div>USD Balance</div>
                      <div>$500.00</div>
                    </div>
                  </div>
                
                  
                </FormItem>
              </FormField>
              <div class="flex flex-col gap-2">
                <span>
                  You’ll recieve<span class="text-red">*</span>
                  </span>
                <div class="relative w-full items-center">
                  <span class="absolute start-0 inset-y-0 border-l text-primary my-2 flex items-center justify-center px-4 mr-0.5">
                    <div class="text-2xl text-muted-foreground/50">£</div>
                  </span>
                  <Input 
                    type="text" 
                    placeholder="0.00" 
                    v-model="sendData.amountToReceive"
                    disabled
                    class="pr-10 pl-20 text-[32px] font-medium text-secondary placeholder:text-secondary/50" 
                  />
                  <span class="absolute end-0 inset-y-0 border-l text-primary my-2 flex items-center justify-center px-4 mr-0.5">
                    <div>Edit</div>
                  </span>
                </div>
                <div class="relative bg-secondary-foreground rounded-lg h-[68px] mt-2">
                    <div class="px-4 pt-1" />
                    <div class="absolute bottom-6 w-full flex items-center justify-between text-muted-foreground px-4 text-xs">
                      <div>GBP Balance</div>
                      <div> £500.00</div>
                    </div>
                  </div>
              </div>
              <Button
                type="submit"
                class="w-full font-semibold gap-2"
              >
                <ConvertIcon />
                Convert Funds
                <ArrowRightIcon class="size-4 stroke-white" />
              </Button>
            </form>
      </div>
    </Card>

    <SuccessOrFail 
      v-if="sendData.step === 2"
      cardTitle="Fund Converted"
      :callbackLabel="'Generate Another Invoice'"
      :copyBtnLabel="'Copy Invoice Link'"
      :copyValue="'https://google.com'"
    />

    <button @click="goBack" class="flex gap-2 items-center mt-10">
      <ChevronLeftIcon class="size-6" />
      Go back
    </button>
  </div>
</DashboardLayout>
</template>
