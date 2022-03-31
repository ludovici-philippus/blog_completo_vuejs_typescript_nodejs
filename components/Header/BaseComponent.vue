<template>
  <header>
    <div class="overlay"></div>
    <div class="header__content">
      <h1>Blog</h1>
    </div>
  </header>
</template>

<script lang=ts>

</script>

<style scoped>
header {
  background-image: url("../../static/images/bg.jpg");
  width: 100%;
  min-height: 50vh;
  position: relative;
  top: 0;
  left: 0;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  min-height: 50vh;
  position: absolute;
}

.header__content {
  text-align: center;
}
</style>
