<template>
  <div>
    <HeaderBaseComponent />
    <MainHomeBaseComponent />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Categoria',
  mounted() {
    console.log(this.$route.params.categoria);
  }
})
</script>

<style scoped>
</style>
