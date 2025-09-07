<script setup lang="ts">
const currentRoute = computed(() => {
  return useRoute().name
})
</script>

<template>
  <UApp>
    <UHeader
      :title="currentRoute !== 'index' ? 'Zkus chemii' : ''"
      :ui="{
        toggle: 'hidden',
        title: 'bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'
      }"
      :toggle="false"
    >
      <template #right>
        <UColorModeButton />
      </template>
    </UHeader>

    <UMain>
        <NuxtPage />
    </UMain>

<!--    <UFooter />-->
  </UApp>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
