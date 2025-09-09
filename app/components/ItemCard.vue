<script setup lang="ts">
const toast = useToast()
const { badges } = useBadges()

defineProps({
  data: {
    type: Object as PropType<ItemCardData>,
    required: true,
  }
});

const excludedLinks = [
  "http://www.bestvina.cz/",
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
      body: 'flex-grow h-full',
      header: 'p-4 pb-0',
      root: `flex flex-col justify-between bg-radial-[at_45%_45%] via-transparent ${!data.highlighted ? 'to-secondary/10' : 'to-primary-500/20'} hover:scale-105 transition-all`
    }"
  >
    <template #header>
      <NuxtImg
          v-slot="{ src, isLoaded, imgAttrs }"
          :src="data.imgSrc"
          class="w-full"
          preset="cardImage"
          :custom="true"
      >
          <!-- Show the actual image when loaded -->
          <div
              v-if="isLoaded"
          >
            <img
                v-bind="imgAttrs"
                class="object-cover w-full aspect-[3/2] rounded-md shadow-lg"
                :src="src"
                loading="lazy"
                :alt="'fotografie k ' + data.title"
            >
            <div class="text-center text-sm text-muted h-12 flex items-center justify-center">
              <p>
                zdroj: {{ data.imgCaption }}
                <span v-if="data.imgCaptionLink" class="ml-1">
                 [<ULink

                    class="underline"
                    :href="data.imgCaptionLink">odkaz</ULink>]
              </span>
              </p>
            </div>
          </div>


          <!-- Show a placeholder while loading -->
          <USkeleton
              v-else
              class="object-cover aspect-[3/2] rounded-md mb-4"
              alt="skeleton během načítání"
          />
      </NuxtImg>
    </template>

    <template #default>
      <div class="flex flex-col gap-y-2">

        <h2 class="text-2xl font-bold text-highlighted pb-[-2]">
          {{ data.title }}
        </h2>
        <p v-if="data.subtitle != undefined" class="text-md font-semibold text-muted">
          {{ data.subtitle }}
        </p>

        <div class="flex flex-row flex-wrap gap-2">
          <UBadge
              v-for="(badge,i) in data.badges"
              :key="i"
              class="font-bold rounded-full px-3"
              variant="outline"
              color="secondary"
          >{{ badges.find(b => b.id === badge)?.title }}
          </UBadge>
        </div>

        <p class="text-neutral">
          {{ data.description }}
        </p>
      </div>
    </template>

    <template v-if="!data.highlighted" #footer>
      <div class="flex flex-row flex-wrap gap-2 justify-end-safe">
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