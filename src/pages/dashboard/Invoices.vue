<script lang="ts" setup>
import { Input } from "@/components/ui/input";
import DashboardLayout from "./layout/DashboardLayout.vue";
import { FilterIcon, SearchIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";

</script>
<template>
  <DashboardLayout
    title="Invoices"
  >
  <div>
    <div class="flex gap-5">
      <div class="relative w-full items-center">
        <Input id="search" type="text" placeholder="Search..." class="pl-12 text-sm py-4 border-border placeholder:text-[#667085B2] placeholder:text-sm" />
        <span class="absolute start-0 inset-y-0 flex items-center justify-center px-4">
          <SearchIcon class="size-6 text-muted-foreground" />
        </span>
      </div>
      <Button variant="outline" class="flex items-center text-muted-foreground/80 hover:bg-muted-background gap-2">
        Filter
        <FilterIcon />

      </Button>
    </div>
  </div>
</DashboardLayout>
</template>
