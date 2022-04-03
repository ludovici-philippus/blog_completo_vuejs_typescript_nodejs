<template>
  <section class="posts">
    <div class="container">
      <MainHomePostSingleComponent
        titulo="Teste"
        image="https://images.pexels.com/photos/11143927/pexels-photo-11143927.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        slug_categoria="geral"
        slug="teste"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'PostsComponent',
  props: {
    titulo: String,
    image: String,
    slug_categoria: String,
    slug: String
  }
})
</script>

<style scoped>
</style>
