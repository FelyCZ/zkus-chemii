<script setup lang="ts">
import useCards from "~/composables/useCards";

const { cards } = useCards()
</script>

<template>
  <UPageColumns>
    <ItemCard
        v-for="(card, i) in cards"
        :key="i"
        :data="card"
    />
  </UPageColumns>
</template>