<script setup lang="ts">
import Card from '../Card.vue';
import { SuccessIcon } from '../icons';
import { Button } from '../ui/button';

defineProps<{
  callbackFn?: () => void
  callbackLabel?: string
  copyBtnLabel?: string
  copyValue?: string
  cardTitle: string
}>()

</script>

<template>
  <Card :title="cardTitle" class="max-w-[607px]">
      <div class="flex flex-col items-center gap-2 max-w-96 mx-auto pt-12">
          <SuccessIcon />
        <Button v-if="copyBtnLabel" class="w-full text-primary bg-primary/5 hover:text-white font-semibold gap-2 mb-4 mt-10">
          {{ copyBtnLabel }}
        </Button>
        <Button v-if="callbackLabel" @click="callbackFn" class="w-full font-semibold gap-2 mb-14">
          {{ callbackLabel }}
          <ArrowRightIcon class="stroke-white" />
        </Button>
        <RouterLink to="/dashboard/home" class="text-center text-primary mb-12 gap-2 hover:underline">
          Back to Dashboard
        </RouterLink>
      </div>
    </Card>
</template>