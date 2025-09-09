<script setup lang="ts">
const isIndexPage = computed(() => {
  return useRoute().name === 'index'
})
</script>

<template>
  <UApp>
    <UHeader
        title=""
      :ui="{
        toggle: 'hidden',
        title: 'bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent flex flex-row items-center gap-2 hover:text-primary hover:scale-105 transition-all'
      }"
      :toggle="false"
    >
      <template v-if="!isIndexPage" #title>
        <UIcon name="i-lets-icons-flask-light" size="30" class="text-primary"/>
        Zkus chemii!
      </template>

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

<!--suppress CssUnusedSymbol -->
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
