<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthLayout from "@/pages/auth/layout/AuthLayout.vue";
import { ArrowRightIcon } from "@radix-icons/vue";
</script>

<template>
  <AuthLayout
    title="Login to your account"
    description="Securely login tp your FinPay accounnt"
    showLogo
  >
    <div class="grid mt-10">
      <div class="grid gap-2 mb-8">
        <Label for="email">Email Address or Phone Number<sup>*</sup></Label>
        <Input id="email" type="email" placeholder="m@example.com" required />
      </div>
      <div class="grid gap-2 mb-10">
        <div class="flex items-center">
          <Label for="password">Password</Label>
          <a
            href="/forgot-password"
            class="ml-auto inline-block text-sm underline"
          >
            Forgot your password?
          </a>
        </div>
        <Input id="password" type="password" required />
      </div>
      <div class="mt-2 text-center text-sm">
        <Button type="submit" class="w-full mb-10"> Login </Button>
        <RouterLink to="/signup" class="flex items-center justify-center gap-2 font-semibold">
          Go to Sign up
          <ArrowRightIcon class="h-12 stroke-gray-800" />
        </RouterLink>
      </div>
    </div>
  </AuthLayout>
</template>
