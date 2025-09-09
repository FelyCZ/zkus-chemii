<script setup lang="ts">

import type { NavigationMenuItem } from "#ui/components/NavigationMenu.vue";

const emits = defineEmits(['tabChange'])

const router = useRouter()
const route = useRoute()
const { sections } = useIndex()

const filterOptions = ref<NavigationMenuItem[]>([
  {
    label: "Vše",
    icon: "i-lucide-globe",
    value: "vse",
  },
  ...sections.value.map((section) => ({
    label: section.short,
    icon: section.icon,
    value: section.id,
  }))
]);

const currentTab = computed({
  get() {
    return (route.query.q as string) || 'vse'
  },
  set(tab: string) {
    router.push({
      path: '/seznam',
      query: { q: tab },
    })
    emits('tabChange', tab)
  }
});
</script>

<template>
  <UTabs
      v-model="currentTab"
      :content="false"
      :items="filterOptions"
      color="secondary"
      class="w-full"
  />
</template>

<style scoped>

</style>