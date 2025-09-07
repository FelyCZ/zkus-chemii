<script setup lang="ts">
const toast = useToast()

defineProps({
  data: {
    type: Object as PropType<ItemCardData>,
    required: true,
  }
});

const excludedLinks = [
    "https://www.bestvina.cz/",
    "/link"
];

function onClickMain(link: string) {
  toast.clear();

  // Bestvina website error
  if (link == excludedLinks[0]) {
    toast.add({
      title: 'Jejda!',
      description: 'Webové stránky soustředění Běstvina jsou aktuálně nefunkční a nové jsou teprve v přípravě. Pokud tě zajímá cokoli ohledně Běstviny, ozvi se mi přes email:\ntodo@todo.cz',
      color: 'error',
      icon: 'i-proicons-skull',
      progress: false
    });
  }
}

</script>

<template>
  <UCard
      class="border-primary/20 border"
    :ui="{
      footer: 'w-full',
      root: 'bg-radial-[at_45%_45%] via-transparent to-emerald-500/5'
    }"
  >
    <template #header>
      <NuxtImg
          v-slot="{ src, isLoaded, imgAttrs }"
          :src="data.imgSrc"
          alt="image"
          class="w-full"
          width="400"
          fit="cover"
          :custom="true"
      >
        <div class="w-full aspect-[3/2] rounded-md shadow-lg">
          <!-- Show the actual image when loaded -->
          <img
              v-if="isLoaded"
              v-bind="imgAttrs"
              class="object-cover aspect-[3/2] rounded-md"
              :src="src"
              alt="fotografie k {{data.title}}"
          >

          <!-- Show a placeholder while loading -->
          <USkeleton
              v-else
              src="https://placehold.co/400x400"
              class="object-cover aspect-[3/2] rounded-md"
              alt="skeleton během načítání"
          /></div>
      </NuxtImg>
    </template>

    <template #default>
      <div class="flex flex-col gap-y-2">

        <h2 class="text-2xl font-bold text-highlighted">
          {{data.title}}
        </h2>

        <p class="text-neutral">
          {{data.description}}
        </p>
      </div>
    </template>

    <template #footer>
      <div class="flex flex-row gap-2 justify-end-safe">
        <UButton
            v-for="(link, i) in data.links"
            :key="i"
            :to="excludedLinks.includes(link.to) ? '' : link.to"
            :color="i === data.links.length - 1 ? 'primary' : 'neutral'"
            :variant="i === data.links.length - 1 ? 'soft' : 'link'"
            target="_blank"
            :label="link.title"
            trailing-icon="i-lucide:arrow-right"
            @click="i === data.links.length - 1 ? onClickMain(link.to) : null"
        />
      </div>
    </template>
  </UCard>
</template>