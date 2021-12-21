<template>
  <div class="container" v-if="database.result != null">
    <div  v-for="(movie, index) in OrderedByPopularity" :key="index">
     <Box :contentobj="movie" />
    </div>
  </div>
</template>

<script>
import database from '../../shared/database.js'
import Box from '../commons/box.vue'
export default {
    name: 'Boxcontainer',
    components:{
      Box,
    },
    data(){
      return{
        database,

      }
    },
    computed: {
      OrderedByPopularity() {
        const contentArray = this.database.displayed
        for (const elem of contentArray){
          if (this.database.languages.includes(elem.original_language)){
            elem.original_language = this.database.langFLag[this.database.languages.indexOf(elem.original_language)]
          }
        }
        return contentArray.sort((a,b) => {
          return b.popularity - a.popularity;
        })
      },
    }
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
}
</style>