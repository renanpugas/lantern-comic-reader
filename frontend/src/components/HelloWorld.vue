<script setup>
import { reactive } from 'vue'
import { Greet } from '../../wailsjs/go/main/App'

const data = reactive({
  name: "",
  resultText: "Please enter your name below 👇",
})

function greet() {
  Greet(data.name).then(result => {
    data.resultText = result
  })
}

</script>

<template>
  <main>
    <img id="logo" alt="Wails logo" src="../assets/images/logo-universal.png"/>

    <div id="result" class="result">{{ data.resultText }}</div>
    <div
      class="tw-flex tw-flex-col tw-w-1/2 tw-mx-auto"
    >
      <v-text-field
        id="name"
        v-model="data.name"
      />
      <v-btn
        class="btn"
        @click="greet"
      >
        Greet
      </v-btn>
    </div>
  </main>
</template>

<style scoped>
#logo {
  display: block;
  width: 50%;
  height: 50%;
  margin: auto;
  padding: 10% 0 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-origin: content-box;
}

.result {
  height: 20px;
  line-height: 20px;
  margin: 1.5rem auto;
}
</style>
