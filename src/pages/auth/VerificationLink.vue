<script setup lang="ts">
import { Button } from "@/components/ui/button";
import AuthLayout from "@/pages/auth/layout/AuthLayout.vue";
import router from "@/router";
import { ArrowLeftIcon } from "@radix-icons/vue";

const enterCode = () => {
  router.push('/verify-code')
}
</script>

<template>
  <AuthLayout
    title="Check your email"
    description="We sent a verification link to olivia@untitledui.com"
    :widthSmall="true"
    :showLogo="false"
  >
    <template v-slot:image>
      <!-- content for the header slot -->
      <svg class="mx-auto" width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="56" height="56" rx="28" fill="#F4EBFF"/>
      <rect x="5" y="5" width="56" height="56" rx="28" stroke="#F9F5FF" stroke-width="10"/>
      <path d="M21.3333 27.1667L30.859 33.8348C31.6304 34.3747 32.016 34.6447 32.4356 34.7493C32.8061 34.8416 33.1937 34.8416 33.5643 34.7493C33.9838 34.6447 34.3695 34.3747 35.1408 33.8348L44.6666 27.1667M26.9333 42.3334H39.0666C41.0268 42.3334 42.0069 42.3334 42.7556 41.9519C43.4141 41.6164 43.9496 41.081 44.2851 40.4224C44.6666 39.6737 44.6666 38.6936 44.6666 36.7334V29.2667C44.6666 27.3066 44.6666 26.3265 44.2851 25.5778C43.9496 24.9192 43.4141 24.3838 42.7556 24.0482C42.0069 23.6667 41.0268 23.6667 39.0666 23.6667H26.9333C24.9731 23.6667 23.993 23.6667 23.2443 24.0482C22.5857 24.3838 22.0503 24.9192 21.7147 25.5778C21.3333 26.3265 21.3333 27.3066 21.3333 29.2667V36.7334C21.3333 38.6936 21.3333 39.6737 21.7147 40.4224C22.0503 41.081 22.5857 41.6164 23.2443 41.9519C23.993 42.3334 24.9731 42.3334 26.9333 42.3334Z" stroke="#7105E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

    </template>
    <div class="text-center text-sm max-w-[360px] w-full mx-auto">
      <Button
        type="submit"
        class="w-full mt-3 mb-8"
        @click="enterCode"
      > 
        Enter code manually 
      </Button>
      <RouterLink to="/signup" class="flex items-center justify-center gap-2 font-semibold">
        <ArrowLeftIcon class="h-12 stroke-gray-800" />
        Back to Sign up
      </RouterLink>
    </div>
  </AuthLayout>
</template>
