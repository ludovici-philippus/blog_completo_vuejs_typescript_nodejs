<template>
  <nav>
    <ul>
      <li :key="categoria['id']" v-for="categoria in categorias">
        <nuxtLink :to="'/' + categoria['slug']">{{ categoria['categoria'] }}</nuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'CategoriasComponent',
  data() {
    return {
      categorias: {}
    }
  },
  methods: {
    async get_categorias() {
      const API_PATH: String = this.$store.getters.getApiPath;
      const CATEGORIAS: Promise<Object> = await this.$axios.$post(`${API_PATH}/get-categorias`)
        .then(response => response);
      this.categorias = CATEGORIAS;
    }
  },
  mounted() {
    this.get_categorias();
  }
})
</script>

<style scoped>
nav {
  max-width: 300px;
  text-align: center;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}
ul {
  list-style: none;
}
li {
  display: inline-block;
  margin-right: 4px;
}
a {
  color: var(--cor-4);
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
