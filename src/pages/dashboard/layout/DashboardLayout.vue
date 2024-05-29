<script setup lang="ts">
import {
  NotificationIcon,
  LogoWhite,
  SendIcon,
  FundIcon,
  ConvertIcon,
  InvoicesIcon,
  DownIcon,
  DashboardWhiteIcon,
  InvoicesWhiteIcon,
  CardWhiteIcon,
  WalletsWhiteIcon,
  TransactionsWhiteIcon
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
import { shallowRef } from "vue";

defineProps<{
  title: string;
  greeting?: string
  isProfile?: boolean
}>();



const links = shallowRef({
  dashboard: {
    path: '/dashboard/home',
    icon: DashboardWhiteIcon
  },
  invoices: {
    path: '/dashboard/invoices',
    icon: InvoicesWhiteIcon
  },
  cards: {
    path: '/dashboard/cards',
    icon: CardWhiteIcon
  },
  wallets: {
    path: '/dashboard/wallets',
    icon: WalletsWhiteIcon
  },
  transactions: {
    path: '/dashboard/transactions',
    icon: TransactionsWhiteIcon
  },
})

const profileLinks = {
  profile: '/dashboard/profile',
  beneficiaries: '/dashboard/profile/beneficiaries',
  security: '/dashboard/profile/security',
  identification: '/dashboard/profile/identification',
}

</script>
<template>
  <main class="flex bg-background place-items-center">
    <div class="w-[280px] bg-primary h-screen rounded-r-2xl">
      <LogoWhite class="mx-auto mt-[42px] mb-10" />
      <div 
        v-if="!isProfile"
        class="px-4 h-[calc(100vh-153px)] flex flex-col gap-y-6 pt-12 border-t border-primary-light"
      >
        <RouterLink 
            v-for="(link, key) in links"
            :key="link.path"
            :to="link.path"
            activeClass="bg-primary-light"
            class="flex items-center gap-3 capitalize text-white py-2 px-3 hover:bg-primary-light rounded-[6px]"
          >
          <component :is="link.icon" />
          <span>{{ key }}</span>
        </RouterLink>
        
        <RouterLink to="/dashboard/profile"
          class="flex items-center gap-x-4 px-4 mt-auto border-t pt-6 text-sm text-white"
        >
          <img 
            class="h-10 w-10 rounded-full"
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png" 
          />
          <div class="flex flex-col text-left">
            <p class="font-semibold">Olivia Rhye </p>
            <span class="max-w-80 text-xs">
              olivia@untitledui.com
            </span>
          </div>
          <DownloadIcon class="size-6 ml-auto self-start -rotate-90" />
        </RouterLink>
      </div>
      <div v-else class="px-4 h-[calc(100vh-153px)] flex flex-col gap-y-6 pt-12 border-t border-primary-light">
        <RouterLink 
            v-for="(link, key) in profileLinks"
            :key="link"
            :to="link"
            activeClass="bg-primary-light"
            class="flex items-center gap-3 capitalize text-white py-2 px-3 hover:bg-primary-light rounded-[6px]"
            :class="key !== 'profile' ? 'ml-10' : ''"
          >
          <PersonIcon v-if="key === 'profile'" />
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
            <DropdownMenuContent class="w-48 font-semibold">
              <DropdownMenuLabel>
                <RouterLink to="/dashboard/wallets/send" class="flex items-center gap-2">
                  <SendIcon class="text-primary" />
                  <span>Send Money</span>
                </RouterLink>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <RouterLink to="/dashboard/wallets/fund" class="flex items-center gap-2">
                  <FundIcon class="text-primary" />
                  <span>Fund Wallet</span>
                </RouterLink>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <RouterLink to="/dashboard/wallets/convert" class="flex items-center gap-2">
                  <ConvertIcon class="text-primary" />
                  <span>Convert Funds</span>
                </RouterLink>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <RouterLink to="/dashboard/invoices/new" class="flex items-center gap-2">
                  <InvoicesIcon class="text-primary" />
                  <span>Create new invoice</span>
                </RouterLink>
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
    </div>
    
  </main>
</template>
