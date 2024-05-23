<script lang="ts" setup>
import Card from "@/components/Card.vue";
import DashboardLayout from "../layout/DashboardLayout.vue";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "@/components/icons";
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@radix-icons/vue";
import router from "@/router";

const goBack = () =>
  router && router.go(-1)

</script>
<template>
  <DashboardLayout
    title="Send Money"
  >
  <div class="max-w-[607px]">
    <Card title="Who are you sending to">
      <div class="flex flex-col gap-10 px-8 pb-12 pt-8">
        <RouterLink
          to=""
          class="flex items-center gap-x-4 p-6 border rounded-lg shadow shadow-shadow hover:bg-primary/5"
        >
          <HomeIcon />
          <div class="flex flex-col text-left">
            <p class="font-semibold">Direct Bank</p>
            <span class="max-w-80 text-xs text-muted-foreground">
              Direct transfer to bank
            </span>
          </div>
          <ChevronRightIcon class="size-6 ml-auto" />
        </RouterLink>
        <RouterLink
          to=""
          class="flex items-center gap-x-4 p-6 border rounded-lg shadow shadow-shadow hover:bg-primary/5 -mt-[18px]"
        >
          <HomeIcon />
          <div class="flex flex-col text-left">
            <p class="font-semibold">Mobile Money</p>
            <span class="max-w-80 text-xs text-muted-foreground">
              Transfer to mobile money
            </span>
          </div>
          <ChevronRightIcon class="size-6 ml-auto" />
        </RouterLink>
        <Button class="w-full font-semibold gap-2">
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
