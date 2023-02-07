<template>

<main>
  
  <div class="flex flex-row flex-wrap h56 gap-6 w-full justify-center mt-40">
    
    <div v-if="loading" class="animate-spin h-20 w-20 mr-3" viewBox="0 0 24 24">
      <img src="/public/images/spinners/star-wars-lightsable.webp">
    </div>

    <div v-for="film in data" :key="film.episode_id" class="w-48 h-48 bg-black/70 rounded flex flex-col text-center text-[#fee81a] justify-center">
      <router-link :to="`/films/${getId(film.url)}`">
      {{film.title}}
      </router-link>
    </div>

  </div> 
 
</main>

  
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      data: null,
      loading: false  
    };
  },
  methods: {
    getFilms() {
      this.loading = true;
      axios.get('https://swapi.dev/api/films/')
      .then(response => {
        this.data = response.data.results
        
      })
      .catch(error => {
        console.log(error);
      })
      .then (() => { 
        this.loading = false;
      })
    },
    getId(url) {
      return url.split('/').reverse()[1];
    },
    /* goHome() {
      this.loding = true;
      this.error = null;
      if()
      return (/)
    } */
  },

  mounted() {
    this.getFilms();
  }
};
</script>
