<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
}>();
</script>
<template>
  <div class="flex min-h-screen h-full bg-slate-800 place-items-center">
    <div
      class="mx-auto my-auto max-w-3xl w-full pt-[71px] pb-20 px-14 bg-white rounded-2xl grid gap-6"
    >
      <div class="text-center">
        <h1 class="text-[40px] font-semibold pb-1.5">
          {{ title }}
        </h1>
        <p class="text-balance text-muted-foreground">
          {{ description }}
        </p>
      </div>
      <slot />
    </div>
  </div>
</template>
