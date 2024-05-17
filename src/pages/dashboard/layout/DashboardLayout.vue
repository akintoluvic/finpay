<script setup lang="ts">
import LogoWhite from "@/components/icons/LogoWhite.vue";
import { ref, watch } from "vue";
import { useRoute } from 'vue-router'

const route = useRoute()

console.log('route', route.path)

defineProps<{
  title: string;
}>();


const links = ref({
  dashboard: {
    path: '/dashboard/home'
  },
  invoices: {
    path: '/dashboard/invoices'
  },
  cards: {
    path: '/dashboard/cards'
  },
  wallets: {
    path: '/dashboard/wallets'
  },
  transactions: {
    path: '/dashboard/transactions'
  },
})


watch(() => route.path, (newId, oldId) => {
  console.log('route', route.path)
})

</script>
<template>
  <main class="flex bg-background place-items-center">
    <div class="w-[280px] bg-primary h-screen rounded-r-xl">
      <LogoWhite class="mx-auto mt-[42px] mb-10" />
      <div class="px-4 grid gap-y-6 pt-12 border-t border-primary-light">
        <RouterLink 
          v-for="(link, key) in links"
          :key="link.path"
          :to="link.path"
          activeClass="bg-primary-light"
          class="flex items-center gap-3 capitalize text-white py-2 px-3 hover:bg-primary-light rounded-[6px]"
        >
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 17.0466H16M11.0177 2.81063L4.23539 8.08576C3.78202 8.43838 3.55534 8.61469 3.39203 8.83549C3.24737 9.03108 3.1396 9.25141 3.07403 9.48568C3 9.75015 3 10.0373 3 10.6117V17.8466C3 18.9667 3 19.5268 3.21799 19.9546C3.40973 20.3309 3.71569 20.6369 4.09202 20.8286C4.51984 21.0466 5.07989 21.0466 6.2 21.0466H17.8C18.9201 21.0466 19.4802 21.0466 19.908 20.8286C20.2843 20.6369 20.5903 20.3309 20.782 19.9546C21 19.5268 21 18.9667 21 17.8466V10.6117C21 10.0373 21 9.75015 20.926 9.48568C20.8604 9.25141 20.7526 9.03108 20.608 8.83549C20.4447 8.61469 20.218 8.43838 19.7646 8.08576L12.9823 2.81063C12.631 2.53738 12.4553 2.40075 12.2613 2.34823C12.0902 2.30189 11.9098 2.30189 11.7387 2.34823C11.5447 2.40075 11.369 2.53738 11.0177 2.81063Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          <span>{{ key }}</span>

      </RouterLink>
      </div>
    </div>
    <div class="flex-1 h-screen overflow-y-scroll">
      <div class="absolute z-50 bg-white h-[113px] w-full border-b pl-16 pr-28 pt-10">
        <h1 class="text-3xl font-semibold">{{ title }}</h1>
      </div>
      <div class="pl-16 pr-28 mt-[161px]">
        <slot />
      </div>
      <div v-for="i in 10" class="h-72 bg-slate-300 mb-10">dd</div>
    </div>
    
  </main>
</template>
