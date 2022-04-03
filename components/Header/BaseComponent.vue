<template>
  <header>
    <div class="overlay"></div>
    <div class="content">
      <HeaderContentComponent />
      <HeaderBuscaComponent />
      <HeaderCategoriasComponent />
    </div>
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

.content {
  position: absolute;
  width: 100%;
  z-index: 2;
  top: 50%;
  text-align: center;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  min-height: 70vh;
  position: absolute;
  z-index: 1;
}
</style>
