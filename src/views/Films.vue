<template>
<div class="flex flex-row flex-wrap gap-6 w-full justify-center p-20">
    
    <router-link class="text-[#fee81a]" :to="{ name: 'home'}">
        <img class="w-12 h-12 bg-[#fee81a]/50 rounded-full" src="https://res.cloudinary.com/dayw7rwf5/image/upload/v1665612804/star-wars/Millennium-Falcon-icon_34498_jfyvwq.png">
        Home
    </router-link>

    <div v-if="loading" class="animate-spin h-20 w-20 mr-3" viewBox="0 0 24 24">
      <img src="/public/images/spinners/red-star-wars-lightsable.png">
    </div>
    <main v-if="data" class="grid grid-cols-3 items-center justify-items-center">
        <h2 class="w-48 h-48 bg-black/70 rounded flex items-center justify-center text-center text-[#fee81a]" v-if="data">Film id Episode # {{ data.title }}</h2>

        <div class="w-full px-3">
            <imgPoster 
            :filmTitle="`${data.title}`" 
            :filmYear="`${data.release_date}`" 
            />
        </div>
        
        <div class="bg-black/70 rounded text-[#fee81a]">
            <p>Director: {{ data.director }}</p>
            <p>Producer: {{ data.producer }}</p>
        </div>       
    </main>
</div>
</template>

<script>
import axios from 'axios';
import imgPoster from "../components/imgPoster.vue";

export default {
    props:['id'],
    data() {
        return {
            data: null,
            loading: false,
            error: false
        } 
    },
    methods: {
        getFilm() {
        this.loading = true;
        axios.get(`https://swapi.dev/api/films/${this.id}`)
        .then(response => {
            this.data = response.data;
            console.log(this.data);
        })
        .catch(error => {
            console.log(error);
      })
      .then (() => { 
        this.loading = false;
      })
        }
    },
    mounted() {
        this.getFilm();
    },
    components: {
        imgPoster
    },
};
</script>