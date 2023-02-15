<template>
  <div>
    <h1>
        Pokemon Page: <span>#{{id}}</span>
        <div v-if="pokemon">
            <img :src="pokemon.sprites.front_default" alt="pokemon.name">
        </div>
    </h1>
  </div>
</template>

<script>
export default {
  props:{
      id:{
          type: Number,
          required: true
        }
  },
  data(){
    return{
      pokemon: null
      
    }
  },
  created(){
    this.getPokemon()
  },
  methods:{
    async getPokemon(){
      try {
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then(r=> r.json());
        this.pokemon = pokemon
      } catch (error) {
        this.$router.push('/')
        console.log(Math.PI(Math.pow(5,2)));
      }
      
    }
  },
  watch:{
    id(){
      this.getPokemon()
    }
  }

}
</script>

<style>

</style>