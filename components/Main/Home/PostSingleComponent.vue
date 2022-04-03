<template>
  <div class="post-single">
    <nuxtLink :to="'/' + slug_categoria + '/' + slug">
      <h3>{{ titulo }}</h3>
      <img :src="image" />
    </nuxtLink>
    <nuxtLink :to="'/' + slug_categoria + '/' + slug">Ler Mais!</nuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'PostSingleComponent',
  props: {
    titulo: String,
    image: String,
    slug_categoria: String,
    slug: String
  }
})

</script>

<style scoped>
.post-single {
  max-width: 31%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
}

a {
  color: black;
  text-decoration: none;
  text-align: center;
}

h3 {
  font-size: 24px;
}

img {
  width: 100%;
}

a:nth-of-type(2) {
  color: white;
  background-color: var(--cor-4);
  width: 100%;
  padding: 10px 0;
  transition: 0.5s;
}
a:nth-of-type(2):hover {
  background-color: #ffb422;
}
</style>
