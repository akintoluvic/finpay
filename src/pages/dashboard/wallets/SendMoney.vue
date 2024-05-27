<script lang="ts" setup>
import Card from "@/components/Card.vue";
import DashboardLayout from "../layout/DashboardLayout.vue";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "@/components/icons";
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@radix-icons/vue";
import router from "@/router";
import { ref } from "vue";

const goBack = () => {
  router && router.go(-1)
  if (sendData.value.step > 1)
    sendData.value.step -= 1
}

const sendData = ref({
  step: 1, 
  type: '', 
  recipient: '', 
  amount: '', 
  description: '',
})

const enableNextButton = () => {
  switch (sendData.value.step) {
    case 1:
      return !!sendData.value.type
  
    default:
      break;
  }
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
    case 3:
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
    title="Send Money"
  >
  <div class="max-w-[607px]">
    <Card title="Who are you sending to">
      <div class="flex flex-col gap-10 px-8 pb-12 pt-8">
        <span v-if="sendData.step === 1" class="flex flex-col gap-10">
          <button
            @click="sendData.type='bank'"
            class="flex items-center gap-x-4 p-6 border rounded-lg shadow shadow-shadow hover:bg-primary/5"
            :class="{ 'bg-primary/5': sendData.type === 'bank' }"
          >
            <HomeIcon />
            <div class="flex flex-col text-left">
              <p class="font-semibold">Direct Bank</p>
              <span class="max-w-80 text-xs text-muted-foreground">
                Direct transfer to bank
              </span>
            </div>
            <ChevronRightIcon class="size-6 ml-auto" />
          </button>
          <button
            @click="sendData.type='mobile'"
            class="flex items-center gap-x-4 p-6 border rounded-lg shadow shadow-shadow hover:bg-primary/5 -mt-[18px]"
            :class="{ 'bg-primary/5': sendData.type === 'mobile' }"
          >
            <HomeIcon />
            <div class="flex flex-col text-left">
              <p class="font-semibold">Mobile Money</p>
              <span class="max-w-80 text-xs text-muted-foreground">
                Transfer to mobile money
              </span>
            </div>
            <ChevronRightIcon class="size-6 ml-auto" />
          </button>
        </span>
        <Button
          class="w-full font-semibold gap-2"
          @click="nextStep"
          :disabled="!enableNextButton()"
        >
          Continue
          <ArrowRightIcon class="size-4 stroke-white" />
        </Button>
      </div>
    </Card>
    <button @click="goBack" class="flex gap-2 items-center mt-10">
      <ChevronLeftIcon class="size-6" />
      Go back
    </button>
  </div>
</DashboardLayout>
</template>
