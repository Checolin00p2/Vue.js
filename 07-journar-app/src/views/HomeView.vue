<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <button @click="goToDayBook" class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-success">Success</button>
    
  </div>
</template>

<script>
export default {
  methods:{
    goToDayBook(){
      this.$router.push({name:'no-entry'})
    }
  }
}
</script>

