<script setup lang="ts">
useSeoMeta({
  title: 'Zkus Chemii!',
  ogTitle: 'Zkus Chemii!',
  description: 'Chemický rozcestník pro středoškolské studenty.',
  ogDescription: 'Chemický rozcestník pro středoškolské studenty.',
  ogImage: 'https://zkus-chemii.pages.dev/img/fotosoutez.png',
})

const isIndexPage = computed(() => {
  return useRoute().name === 'index'
})
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator/>
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
        <UColorModeButton/>
      </template>
    </UHeader>

    <UMain>
      <NuxtPage/>
    </UMain>

    <div class="flex flex-col items-center justify-center gap-6">
      <USeparator/>
      <div class="grid grid-cols-1 gap-y-2 md:grid-cols-2 md:gap-y-0 justify-items-center">
        <UButton
            to="/seznam"
            variant="link"
            icon="i-lucide-list"
            color="neutral">
          Seznam aktivit
        </UButton>
        <UButton
            to="/kontakt"
            variant="link"
            icon="i-lucide-contact"
            color="neutral">
          Kontakt
        </UButton>
      </div>
      <div class="w-full text-center flex flex-row items-center justify-center py-4 bg-secondary/20">
        <span>
          Zdrojový kód je dostupný na
        </span>
        <ULink
            to="https://github.com/FelyCZ/zkus-chemii"
            icon="i-simple-icons-github"
            variant="link"
            target="_blank"
            class="ml-1 flex items-center gap-1 px-1">
          <UIcon
              name="i-simple-icons-github"
              size="20"
          />
          <span>GitHubu</span>
        </ULink>
      </div>

    </div>
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
