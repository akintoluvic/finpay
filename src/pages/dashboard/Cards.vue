<script lang="ts" setup>
import Card from "@/components/Card.vue";
import DashboardLayout from "./layout/DashboardLayout.vue";
import { Button } from "@/components/ui/button";
import { EmptyCardsList } from "@/components/icons";

</script>
<template>
  <DashboardLayout
    title="Cards"
  >
  <div class="max-w-2xl">
    <Card title="Cards">
      <div class="flex flex-col items-center gap-11 px-10 pb-12 pt-10">
        <EmptyCardsList />
        <Button class="w-full font-semibold gap-2">
          <CardWhiteIcon />
          Create new card
        </Button>
      </div>
    </Card>
  </div>
</DashboardLayout>
</template>
