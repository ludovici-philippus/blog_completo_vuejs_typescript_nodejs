<template>
  <header>
    <div class="overlay"></div>
    <HeaderContentComponent />
    <HeaderCategoriasComponent />
  </header>
</template>

<script lang=ts>
export default {
  name: 'ContentComponent'
}
</script>

<style scoped>
header {
  background-image: url("../../static/images/bg.jpg");
  width: 100%;
  min-height: 70vh;
  position: relative;
  top: 0;
  left: 0;
  color: white;
  z-index: 0;
  background-position: bottom;
  background-size: cover;
  background-attachment: fixed;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  min-height: 70vh;
  position: absolute;
  z-index: 1;
}
</style>
