<template>
<div class="flex justify-center">
    <div v-if="loading" class="animate-spin h-20 w-20 mr-3" viewBox="0 0 24 24">
      <img src="/public/images/spinners/red-star-wars-lightsable.png">
    </div> 
    <div class="text-[#fee81a]">
        <img v-if="dataPoster" :src="`${dataPoster.Poster}`" alt=""/> 
        <p>{{filmTitle}}</p>
        <p>{{getYear}}</p>
        <div v-if="error" class="w-full h-56 bg-slate-700 flex justify-center items-center"> {{error}} </div> 
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: "imgPoster",
    props: [
        "filmTitle",
        "filmYear"
    ],
    computed: {
        getYear() {
            return this.filmYear.split("-")[0];
        },
    },
    data() {
        return {
            dataPoster: null,
            loading: false,
            error: false
        }
    },
    methods: {
      async getPoster(){
        try{
            this.loading = true;
            const response = await axios.get(`http://www.omdbapi.com/?t=${this.filmTitle}&y=${this.getYear}&apikey=fe031bf3`);
            console.log(response);
            if(response.data.Response === "False"){
                throw new Error(response.data.Error);
            }
            this.dataPoster = response.data;    
        } catch(error){
            this.error = error;
            console.log(error);
        } finally {
                this.loading = false;
        }
     }
    },
    mounted() {
        this.getPoster();
    },
}
</script>