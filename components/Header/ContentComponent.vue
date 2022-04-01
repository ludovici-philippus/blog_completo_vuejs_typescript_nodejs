<template>
  <div class="header__content">
    <h1>
      <nuxtLink to="/">Blog</nuxtLink>
    </h1>
  </div>
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

.header__content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}
</style>
