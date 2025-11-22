<script setup>
  import { useRouter } from 'vue-router'

  const router = useRouter()

  async function redirectToHome() {
    setTimeout(
      () => router.push({ path: '/home' }),
      5000,
    )
  }

  redirectToHome()
</script>

<template>
  <main class="tw-flex tw-flex-col tw-justify-between tw-items-center tw-h-screen background">
    <img
      class="tw-h-[256px] tw-mt-16"
      alt="Wails logo"
      src="../assets/images/logo.png"
    >

    <v-progress-circular
      class="tw-mb-16"
      size="80"
      indeterminate
    />
  </main>
</template>

<style scoped>
.background {
  background: linear-gradient(135deg, #F3F0EC 0%, #D6C7B2 100%);
}
</style>
