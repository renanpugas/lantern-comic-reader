<script setup>
  import SystemBar from '../components/SystemBar.vue'

</script>

<template>
  <main class="tw-flex tw-flex-col tw-justify-between tw-items-center tw-h-screen background">
    <system-bar />
  </main>
</template>

<style scoped>
.background {
  background: linear-gradient(135deg, #F3F0EC 0%, #D6C7B2 100%);
}
</style>
