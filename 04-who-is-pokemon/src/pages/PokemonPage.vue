<template>
  <div>
    <h1 v-if="!pokemon">Espere por favor...</h1>
    <div v-else>
      <h1>¿Quién es este pokemon</h1>
      <pokemon-picture
        :pokemonId="pokemon.id"
        :showPokemon="showPokemon"
      ></pokemon-picture>
      <pokemon-options
        :pokemons="pokemonArr"
        @selection="checkAnswer"
      ></pokemon-options>
      <template v-if="showAnswer" class="fade-in">
        <h2>{{ message }}</h2>
        <button @click="newGame">Nuevo Juego</button>
      </template>
    </div>
  </div>
</template>

<script>
import PokemonOptions from "../components/PokemonOptions.vue";
import PokemonPicture from "../components/PokemonPicture.vue";
import getPokemonOptions from "../helpers/getPokemonOptions";

export default {
  components: { PokemonPicture, PokemonOptions },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: "",
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();
      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[rndInt];
    },
    checkAnswer(selectedId) {
      this.showPokemon = true;
      this.showAnswer = true;
      if (selectedId == this.pokemon.id) {
        this.message = `Correcto, ${this.pokemon.name}`;
      } else {
        this.message = `Oops, era ${this.pokemon.name}`;
      }
    },
    newGame(){
    this.showPokemon=false
    this.showAnswer =false
    this.pokemon=null
    this.pokemonArr = []
    this.mixPokemonArray()
    }
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>

<style>
</style>