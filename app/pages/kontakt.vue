<script setup lang="ts">
const { aboutMe } = useAboutMe()

</script>

<template>
  <UPage>
    <UMain>
      <UPageHero
          :title="aboutMe.title"
          :description="aboutMe.bio"
          orientation="horizontal"
          reverse
          :ui="{
            root: 'mx-8',
            container: '!justify-center items-center lg:p-8 py-12 lg:py-44 lg:grid-cols-10',
            title: 'text-center lg:text-left',
            description: 'text-justify lg:pe-8',
            wrapper: 'lg:col-span-6',
            links: 'justify-center lg:justify-start',
          }"
          :links="aboutMe.links"
      >
        <NuxtImg
            v-slot="{ src, isLoaded, imgAttrs }"
            :src="aboutMe.img"
            preset="cardImage"
            :custom="true"
            loading="lazy"
            class="w-[70%] justify-self-center lg:col-span-4"
        >
          <!-- Show the actual image when loaded -->
          <img
              v-if="isLoaded"
              v-bind="imgAttrs"
              class="object-cover aspect-[1/1] rounded-md shadow-lg"
              :src="src"
              loading="lazy"
              alt="fotografie Andrea Slívová"
          >


          <!-- Show a placeholder while loading -->
          <USkeleton
              v-else
              class="object-cover aspect-[1/1] rounded-md mb-4 h-20"
          />
        </NuxtImg>
      </UPageHero>
    </UMain>
  </UPage>
</template>