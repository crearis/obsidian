<script lang="ts" setup>
import { defineBlock, imageField } from '#pruvious'

defineBlock({
  icon: 'Video',
})

defineProps({
  image: imageField({
    required: true,
    minWidth: 1440,
    sources: [
      { media: '(max-width: 400px)', format: 'webp', width: 720 },
      { media: '(max-width: 400px)', format: 'jpeg', width: 720 },
      { format: 'webp', width: 1440 },
      { format: 'jpeg', width: 1440 },
    ],
  }),
})
</script>

<template>
  <Container class="content-block">
    <PruviousPicture :image="image" class="max-w-content block h-auto w-full overflow-hidden rounded-md" />
  </Container>
</template>
