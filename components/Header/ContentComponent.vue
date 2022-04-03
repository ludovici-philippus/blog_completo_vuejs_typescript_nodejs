<template>
  <h1>
    <nuxtLink to="/">Blog</nuxtLink>
  </h1>
</template>

<script lang=ts>
export default {
  name: 'ContentComponent'
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}

h1 {
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 48px;
}
</style>
