<template>
  <section class="posts">
    <div class="container">
      <MainHomePostSingleComponent
        :key="post.id"
        v-for="post in posts"
        :titulo="post.nome"
        :image="post.imagem"
        :slug_categoria="post.slug_categoria"
        :slug="post.slug"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'PostsComponent',
  data() {
    return {
      posts: [{}]
    }
  },
  methods: {
    async get_posts() {
      const API_PATH = this.$store.getters.getApiPath;
      if (this.$route.params.categoria != undefined && this.$route.params.categoria.length != 0) {
        const API_END_POINT = 'get-posts-categoria';
        const POSTS = await this.$axios.$post(`${API_PATH}/${API_END_POINT}`, {
          categoria: this.$route.params.categoria,
        }).then(response => response);
        console.log(POSTS);
        this.posts = POSTS;
      }
      else {
        const API_END_POINT = 'get-posts';
        const POSTS = await this.$axios.$post(`${API_PATH}/${API_END_POINT}`)
          .then(response => response);
        console.log(POSTS);
        this.posts = POSTS;
      }
    }
  },
  mounted() {
    this.get_posts();
  }
})
</script>

<style scoped>
</style>
