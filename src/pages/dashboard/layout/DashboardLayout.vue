<script setup lang="ts">
import {
  NotificationIcon,
  LogoWhite,
  SendIcon,
  FundIcon,
  ConvertIcon,
  InvoicesIcon,
  DownIcon

} from "@/components/icons";
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ref, watch } from "vue";
import { useRoute } from 'vue-router'

const route = useRoute()

console.log('route', route.path)

defineProps<{
  title: string;
  greeting?: string
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
    <div class="w-[280px] bg-primary h-screen rounded-r-2xl">
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
    <div class="flex-1 h-screen overflow-y-scroll text-muted">
      <div class="absolute z-50 flex justify-between bg-white h-[113px] w-[calc(100%-280px)] border-b pl-16 pr-28 pt-8">
        
        <div>
          <h1 class="text-3xl font-semibold">{{ title }}</h1>
          <p :v-if="greeting" class="text-sm text-muted-foreground">{{ greeting }}</p>
        </div>
        <div class="flex gap-x-6">
          <DropdownMenu>
            <DropdownMenuTrigger class="flex items-center gap-x-2 self-start px-3.5 py-2.5 border border-border/60 rounded-lg font-semibold">
              <DownIcon />
              <span class="text-muted">Quick Actions</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent class="w-40">
              <DropdownMenuLabel>
                <div class="flex items-center gap-2">
                  <SendIcon />
                  <span>Send Money</span>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div class="flex items-center gap-2">
                  <FundIcon />
                  <span>Fund Wallet</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div class="flex items-center gap-2">
                  <ConvertIcon />
                  <span>Convert Funds</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div class="flex items-center gap-2">
                  <InvoicesIcon />
                  <span>Create new invoice</span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button class="rounded-full" variant="outline" size="icon">
            <NotificationIcon class="w-5 h-5" />
          </Button>
        </div>
      </div>
      <div class="pl-16 pr-28 mt-[161px]">
        <slot />
      </div>
      <div v-for="i in 10" class="h-72 bg-slate-300 mb-10">dd</div>
    </div>
    
  </main>
</template>
