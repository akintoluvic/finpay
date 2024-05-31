<script setup lang="ts">
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Badge } from '../ui/badge';

defineProps<{
  title: string
  description?: string
  step?: string
}>()
</script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <slot name="trigger" />
    </SheetTrigger>
    <SheetContent class="w-1/2">
      <SheetHeader>
        <SheetTitle class="text-[30px]">
          <span class="flex items-center gap-6">
            {{ title }}
            <Badge v-if="step" variant="primary" class="py-2 px-4">Step {{ step }}/2</Badge>
          </span>
          
        </SheetTitle>
        <SheetDescription v-if="description">
          {{ description }}
        </SheetDescription>
      </SheetHeader>
      <slot />
      <SheetFooter>
        <SheetClose as-child>
          <slot name="close" />
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
</template>