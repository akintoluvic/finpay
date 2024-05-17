<script setup lang="ts">
import Logo from "@/components/icons/Logo.vue";

defineProps<{
  title: string;
  description: string;
  widthSmall?: boolean;
  showLogo: {
    type: Boolean,
    default: false
  }
}>();
</script>
<template>
  <main class="flex min-h-screen h-full bg-background place-items-center">
    <div class="w-[280px] bg-primary h-screen rounded-r-xl">dhhd</div>
    <div class="flex-1 h-screen overflow-y-scroll">
      <slot />
    </div>
    
  </main>
</template>
