<template>
  <div>
      <input type="text" v-model="newquery" @keyup.enter="research(newquery, database.showedBox)">
      <button @click="research(newquery, database.showedBox)">Search</button>
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
      lang: 'it-IT'
    }
  },
  methods: {
    
    research(newstring, lenght){
      // nel caso in cui l'imput non fosse corretto
      this.database.displayed = []
      if (this.newquery == '' || this.newquery == null || this.newquery == ' '){
        axios.get('https://api.themoviedb.org/3/movie/popular', {
          params: {
            api_key: this.database.api_key,
            language: 'it-IT'
          }
        })
        .then((prova) => {
            for (let i = 0; i <= (lenght - 1); i++){
              this.database.displayed.push(prova.data.results[i])
            }
        })
        .catch((error) => {
          console.log(error)
        }) 
      } else {
        if (this.database.mediaType == 'all'){
          axios.get(this.database.baseUrl + this.database.pathAPI.searchMovie, {
            params: {
              api_key: this.database.api_key,
              query: newstring,
              language: 'it-IT'
            }
          })
          .then((prova) => {
              for (let i = 0; i <= ((lenght - 1)/2); i++){
                if (prova.data.results[i] != undefined){
                  this.database.displayed.push(prova.data.results[i])
                }
              }
          })
          .catch((error) => {
            console.log(error)
          })
          axios.get(this.database.baseUrl + this.database.pathAPI.searchTvseries, {
            params: {
              api_key: this.database.api_key,
              query: newstring,
              language: 'it-IT'
            }
          })
          .then((prova) => {
              for (let i = 0; i <= ((lenght - 1)/2); i++){
                if (prova.data.results[i] != undefined){
                  this.database.displayed.push(prova.data.results[i])
                }
              }
          })
          .catch((error) => {
            console.log(error)
          })
        }
      }
    },
    
  },
}
</script>

<style scoped lang="scss">

</style>