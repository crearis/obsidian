<template>
  <Button :is="is" :size="size" :variant="variant">
    <slot name="prefix" />
    <slot />
  </Button>
</template>

<script lang="ts" setup>
import { NuxtLink } from '#components'

defineProps({
  /**
   * A dynamic component or an HTML tag to render.
   * This is useful when rendering `<RouterLink>` or `<NuxtLink>` components.
   *
   * @default NuxtLink
   */
  is: {
    type: [Object, String] as PropType<'a' | 'button' | 'span' | Component>,
    default: NuxtLink,
  },
  /**
   * The color variant of the button.
   *
   * @default 'primary'
   */
  variant: {
    type: String as PropType<'primary' | 'plain' | 'link' | 'tertiary'>,
    default: 'primary',
  },

  /**
   * The size of the button.
   *
   * @default 'medium'
   */
  size: {
    type: String as PropType<'small' | 'medium'>,
    default: 'medium',
  },
})
</script>
