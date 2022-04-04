<template>
  <main>
    <h2>Posts</h2>
    <MainHomePostsComponent />
  </main>
</template>

<script lang="ts">
export default {
  name: 'HomeBaseComponent',
}
</script>

<style scoped>
h2 {
  text-align: center;
  border-bottom: 1px solid #333;
  margin: 10px auto;
  padding-bottom: 5px;
  max-width: 300px;
}
</style>
