<script setup lang="ts">

const title = "Zkus chemii!"
const descritpion = "Jsi připravený na chemické dobrodružství? Vydej se s námi na výlety a soustředění," +
    " kde se chemie stane součástí tvého života. Poznej nové kamarády, " +
    "se kterými budeš řešit zapeklité úkoly a objevovat svět kolem sebe. " +
    "Tvá chemická cesta právě začíná. Přidej se k nám!"
</script>

<template>
  <UPage>
    <UMain>
      <div class="flex flex-col justify-center items-center">
        <div class="w-4/5 md:w-2/3">
          <UPageHero
              :title="title"
              :description="descritpion"
              headline=""
              :links="[{
                label: 'Přejít na seznam',
                to: '/seznam',
                icon: 'i-lucide-rocket',
                color: 'secondary',
              },]"
              :ui="{
                title: 'bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'
              }"
          >
            <template #headline>
              <UIcon name="i-lets-icons-flask-light" size="100" class="text-primary" />
            </template>
          </UPageHero>
        </div>
      </div>


    </UMain>

  </UPage>
</template>