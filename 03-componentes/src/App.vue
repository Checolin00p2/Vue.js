<template>
<div>
  <Indecision></indecision>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  
  <!-- <Counter :start="100" /> -->
</div>
</template>

<script>
import Indecision from '@/components/Indecision.vue'
// import Counter from './components/Counter.vue'


export default {
  name: 'App',
  components: {
    Indecision
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: graysscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>