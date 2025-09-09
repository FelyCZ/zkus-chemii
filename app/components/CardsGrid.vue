<script setup lang="ts">

const route = useRoute()
const router = useRouter()
const { items } = useCards()
const { sections } = useIndex()


if (route.query.q === undefined || !sections.value.map((section) => section.id).includes(route.query.q as string)) {
  router.push({
    path: '/seznam',
  })
  route.query.q = 'vse'
}

const currentTab = ref(route.query.q as string || 'vse')

const filteredItems = computed(() => {
  if (currentTab.value === 'vse') {
    return items.value
  }

  return items.value.filter((item) =>
      item.section === currentTab.value
  )
})

function reloadList(tab: string) {
  currentTab.value = tab
}

</script>

<template>

  <ListFilter
    @tab-change="reloadList"
  />
  <UPageGrid>
    <ItemCard
        v-for="(card, i) in filteredItems"
        :key="i"
        :data="card"
    />
  </UPageGrid>
</template>