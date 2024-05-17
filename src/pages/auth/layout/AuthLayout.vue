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
  <div class="flex min-h-screen h-full bg-[#7105E9] place-items-center">
    <div
      class="mx-auto my-auto max-w-[774px] w-full pt-[71px] pb-20 px-14 bg-white rounded-2xl grid gap-6"
    >

      <div class="text-center" :class="{ 'max-w-[360px] w-full mx-auto': widthSmall}">
        <div class="mb-5 mx-auto">
          <slot name="image" />
        </div>
        <Logo :v-if="showLogo" class="mx-auto mb-1.5" />
        <h1 class="font-semibold pb-1.5" :class="[widthSmall ? 'text-[30px]' : 'text-[40px]']">
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
