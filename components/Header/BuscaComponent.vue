<template>
  <div>
    <input type="text" name="busca" placeholder="Busca..." />
    <button>P</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'BuscaComponent'
}
</script>

<style scoped>
div {
  max-width: 500px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 10 auto;
}

input {
  width: 90%;
  height: 40px;
  border: 0px solid #ccc;
  margin-right: 0px;
  padding-left: 4px;
}

button {
  width: 10%;
  height: 40px;
  margin-left: 0;
  border: 1px solid var(--cor-5);
  color: white;
  background-color: var(--cor-5);
  cursor: pointer;
}
</style>
