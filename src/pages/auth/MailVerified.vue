<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthLayout from "@/pages/auth/layout/AuthLayout.vue";
import { ArrowLeftIcon } from '@radix-icons/vue'
</script>

<template>
  <AuthLayout
    title="Email verified"
    description="Your password has been successfully reset. Click below to log in magically."
    :widthSmall="true"
  >
    <template v-slot:image>
      <!-- content for the header slot -->
      <svg class="mx-auto" width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="5" y="5" width="56" height="56" rx="28" fill="#D1FADF"/>
<rect x="5" y="5" width="56" height="56" rx="28" stroke="#ECFDF3" stroke-width="10"/>
<path d="M27.7502 32.9999L31.2502 36.4999L38.2502 29.4999M44.6668 32.9999C44.6668 39.4432 39.4435 44.6666 33.0002 44.6666C26.5568 44.6666 21.3335 39.4432 21.3335 32.9999C21.3335 26.5566 26.5568 21.3333 33.0002 21.3333C39.4435 21.3333 44.6668 26.5566 44.6668 32.9999Z" stroke="#039855" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


    </template>
    <div class="text-center text-sm max-w-[360px] w-full mx-auto">
      <Button type="submit" class="w-full mt-2 bg-violet-700 hover:bg-violet-800"> Continue </Button>
      <span class="block my-8">Didn't receive the email?
        <RouterLink to="/signup" class="font-semibold">Click to resend</RouterLink>
      </span>
      <span class="flex items-center justify-center my-8">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
        <ArrowLeftIcon class="h-12 text-blue-700" />
        <RouterLink to="/signup" class="ml-2 font-semibold">Back to Sign up</RouterLink>
      </span>
    </div>
  </AuthLayout>
</template>
