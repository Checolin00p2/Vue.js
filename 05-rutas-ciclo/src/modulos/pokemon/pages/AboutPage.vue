<template>
  <div>
    <h1>About Page</h1>
    <hr>
    <h2>{{name}}</h2>
    <button @click="onChangeName">Cambiar nombre</button>
  </div>
</template>

<script>
export default {

  data(){
    return {
      name:'Sergio'
    }
  },
  methods:{
    onChangeName(){
    
      this.name= 'Emmanuel'
    }
  }
  ,
  beforeCreate(){
    
    console.log('beforeCreate');
  },
  created(){
    console.log('created');
  },
  beforeMount(){
    console.log('beforeMount');
  },
  mounted(){
    console.log('mounted');
  },
  beforeUpdate(){
    console.log('beforeUpdate');
  },
  updated(){
    console.log('updated');
  },
  activated(){
    console.log('activated');
  },
  deactivated(){
    console.log('deactivated');
  },
  beforeUnmount(){
    console.log('beforeUnmount');
  },
  unmounted(){
    console.log('unmounted');
  },
  errorCaptured(){
    console.log('errorCaptured');
  },
  renderTracked(){
    console.log('renderTracked');
  },
  rendeTriggered(){
    console.log('rendeTriggered');
  },
}
</script>

<style>

</style>