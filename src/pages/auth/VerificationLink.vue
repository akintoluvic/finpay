<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthLayout from "@/components/layouts/AuthLayout.vue";
</script>

<template>
  <AuthLayout
    title="Check your email"
    description="We sent a verification link to olivia@untitledui.com"
    :widthSmall="true"
  >
    <div class="text-center text-sm max-w-[360px] w-full mx-auto">
      <Button type="submit" class="w-full mt-6 mb-8"> Enter code manually </Button>
      <RouterLink to="/signup" class="underline">Back to Sign up</RouterLink>
    </div>
  </AuthLayout>
</template>
