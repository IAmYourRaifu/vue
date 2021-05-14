<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
   <div id="nav">
      <router-link to="/page1">page1</router-link> |
      <router-link to="/page2">page2</router-link> |
      <router-link to="/page4">page4</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
