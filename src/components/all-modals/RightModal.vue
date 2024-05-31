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

defineProps<{
  title: string
  description?: string
}>()
</script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <slot name="trigger" />
    </SheetTrigger>
    <SheetContent class="w-1/2">
      <SheetHeader>
        <SheetTitle class="text-[30px]">{{ title }}</SheetTitle>
        <SheetDescription v-if="description">
          Make changes to your profile here. Click save when you're done.
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