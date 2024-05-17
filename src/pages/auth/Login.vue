<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthLayout from "@/pages/auth/layout/AuthLayout.vue";
</script>

<template>
  <AuthLayout
    title="Login to your account"
    description="Securely login tp your FinPay accounnt"
    :showLogo="true"
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
        <RouterLink to="/signup" class="underline">Forgot password</RouterLink>
      </div>
    </div>
  </AuthLayout>
</template>
