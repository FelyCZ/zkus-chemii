<script setup lang="ts">

const { hero, sections } = useIndex()

</script>

<template>
  <UPage>
    <UMain>
      <div class="flex flex-col justify-center items-center mb-24">
        <div class="w-4/5 md:w-2/3">
          <UPageHero
              :title="hero.title"
              :description="hero.descritpion"
              headline=""
              :links="hero.links"
              :ui="{
                title: 'bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'
              }"
          >
            <template #headline>
              <UIcon name="i-lets-icons-flask-light" size="100" class="text-primary"/>
            </template>
          </UPageHero>

          <UPageGrid
             class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3"

          >
            <div
                v-for="(section, i) in sections"
                :key="i"
            >
              <NuxtLink
                  :to="section.link"
                  prefetch-on="visibility"
              >
                <UCard
                    :ui="{
                  root: 'h-full flex flex-col bg-radial-[at_30%_0%] via-transparent to-secondary/10 hover:scale-105 transition-all',
                  body: 'flex-grow',
                  header: 'flex flex-row gap-2 items-center',
                }"
                >
                  <template #header>
                    <UIcon :name="section.icon" size="30" class="text-secondary"/>
                    <p class="text-xl font-bold pb-[-2]">
                      {{ section.title }}
                    </p>
                  </template>
                  <template #default>
                    <div class="flex flex-col gap-y-2">

                      <p class="text-lg font-semibold text-muted">
                        {{ section.subtitle }}
                      </p>

                    </div>
                  </template>

                  <template #footer>
                    <UButton
                        variant="link"
                        trailing-icon="i-lucide-arrow-right"
                        class="w-full justify-center text-center hover:scale-105 transition-all"
                        size="xl"
                        :to="section.link"
                        color="secondary"
                    >
                      {{ section.action }}
                    </UButton>
                  </template>
                </UCard>
              </NuxtLink>
            </div>


          </UPageGrid>
        </div>
      </div>


    </UMain>

  </UPage>
</template>