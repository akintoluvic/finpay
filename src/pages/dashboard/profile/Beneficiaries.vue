<script lang="ts" setup>
import Card from "@/components/Card.vue";
import DashboardLayout from "../layout/DashboardLayout.vue";
import router from "@/router";
import { ArrowRightIcon, ChevronLeftIcon, PlusIcon } from "@radix-icons/vue";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "@/components/icons";

const goBack = () => {
  router && router.go(-1)
}



</script>
<template>
  <DashboardLayout
    title="Beneficiaries"
    :is-profile="true"
  >
    <div class="pb-14 flex flex-col gap-12">
      <div class="flex gap-5">
      <div class="relative w-full items-center">
        <Input id="search" type="text" placeholder="Search..." class="pl-12 text-sm py-4 border-border placeholder:text-[#667085B2] placeholder:text-sm" />
        <span class="absolute start-0 inset-y-0 flex items-center justify-center px-4">
          <SearchIcon class="size-6 text-muted-foreground" />
        </span>
      </div>
      <Button class="flex items-center text-primary bg-white border border-primary hover:bg-muted-background gap-2">
        <PlusIcon />
        Add beneficiary
        <ArrowRightIcon />

      </Button>
    </div>
      <Card title="Manage Beneficiaries">
        <div class="flex flex-col gap-8 px-8 pb-10 pt-8">
          <div class="flex items-center gap-4 text-[32px]">
            <div class="w-[72px] aspect-square grid place-items-center rounded-lg text-primary font-semibold bg-primary/5">
              OR
            </div>
            <p class="font-medium">Olivia Rhye</p>
          </div>
          <div class="h-[1px] bg-border text-border" />
        </div>
      </Card>
      <button @click="goBack" class="flex gap-2 items-center -mt-2">
        <ChevronLeftIcon class="size-6" />
        Go back
      </button>

    </div>
    
  </DashboardLayout>
</template>
