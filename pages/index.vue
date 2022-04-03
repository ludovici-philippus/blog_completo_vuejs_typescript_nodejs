<template>
  <div>
    <HeaderBaseComponent />
    <MainHomeBaseComponent />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>

<style>
@charset 'UTF-8';
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;700&family=Oswald:wght@700&display=swap");
:root {
  --cor-1: #d63230;
  --cor-2: #304c89;
  --cor-3: #648de5;
  --cor-4: #eec643;
  --cor-5: #519872;

  --fonte-base: "IBM Plex Sans Arabic", sans-serif;
  --fonte-titulos: "Oswald", sans-serif;
}
* {
  margin: 0;
  padding: 0;
  font-family: var(--fonte-base);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--fonte-titulos);
}

.container {
  max-width: 900px;
  margin: auto;
  padding: 0 2%;
  display: flex;
  flex-wrap: wrap;
}
</style>
