<template>
  <div id="app">
    <Head/>
    <Main/>
  </div>
</template>

<script>
import Head from './components/macro/head.vue'
import Main from './components/macro/main.vue'
import database from './shared/database.js'
import axios from "axios";

export default {
  name: 'App',
  components: {
    Head,
    Main,
  },
  data(){
    return{
      database,
    }
  },
  methods: {

  },
  // vengo visualizzati i più popolari 
  created(){
    axios.get('https://api.themoviedb.org/3/movie/popular', {
      params: {
        api_key: this.database.api_key,
        language: 'it-IT'
      }
    })
    .then((prova) => {
        this.database.result = prova.data
        prova.data.results.forEach(element => {
          this.database.displayed.push(element)
        });
    })
    .catch((error) => {
      console.log(error)
    }) 
  },
}
</script>

<style lang="scss">
@import './assets/style/global.scss'

</style>
