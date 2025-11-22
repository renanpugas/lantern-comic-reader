<script setup>
  import { SelectDirectory } from '../../wailsjs/go/filenavigator/FileNavigatorService'

  const listItems = [
    {
      title: 'Abrir Arquivo',
    },
    {
      title: 'Abrir Pasta',
      handler: handleSelectDirectory,
    },
  ]

  async function handleSelectDirectory() {
    const files = await SelectDirectory()
    console.log(files)
  }
</script>

<template>
  <v-layout>
    <v-system-bar
      class="tw-h-10"
      window
    >
      <v-menu
        open-on-hover
      >
        <template #activator="{ props }">
          <v-btn
            class="tw-text-base tw-font-medium tw-normal-case tw-tracking-tight"
            variant="text"
            v-bind="props"
          >
            Arquivos
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, index) in listItems"
            :key="index"
            class="tw-text-left"
            :value="index"
          >
            <v-list-item-title
              @click="item.handler"
            >
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-spacer />
    </v-system-bar>
  </v-layout>
</template>
