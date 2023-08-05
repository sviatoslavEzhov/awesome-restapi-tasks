<template>
  <header></header>
  <main>
    <router-view />
  </main>
  <footer></footer>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
