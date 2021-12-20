<template>
  <div>
      <input type="text" v-model="newquery" @keyup.enter="research(newquery)">
      <button @click="research(newquery)">Search</button>
  </div>
</template>

<script>
import database from '../../shared/database.js'
import axios from "axios";

export default {
  name: 'SearchBar',
  data(){
    return{
      database,
      newquery: null,
    }
  },
  methods: {
    research(newstring){
      if (this.newquery == '' || this.newquery == null || this.newquery == ' '){
        axios.get('https://api.themoviedb.org/3/movie/popular', {
          params: {
            api_key: this.database.api_key,
            language: 'it-IT'
          }
        })
        .then((prova) => {
            this.database.result = prova
        })
        .catch((error) => {
          console.log(error)
        }) 
      } else {
        axios.get('https://api.themoviedb.org/3/search/movie', {
          params: {
            api_key: this.database.api_key,
            query: newstring,
          }
        })
        .then((prova) => {
            this.database.result = prova
        })
        .catch((error) => {
          console.log(error)
        }) 
      }
    }
  },
}
</script>

<style scoped lang="scss">

</style>