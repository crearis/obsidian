<template>
  <Body class="font-body" :class="bodyClass" />
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
usePageTitle()

const bodyClass = ref('')

onMounted(() => {
  // Need this class for cypress testing
  bodyClass.value = 'hydrated'
})
</script>
