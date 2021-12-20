<template>
  <div class="container" v-if="database.result != null">
    <div  v-for="(movie, index) in database.result.data.results" :key="index">
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
    }
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
}
</style>