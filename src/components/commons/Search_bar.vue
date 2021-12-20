<template>
  <div>
      <input type="text" v-model="database.criteria">
      <button>Search</button>
  </div>
</template>

<script>
import database from '../../shared/database.js'

export default {
  name: 'SearchBar',
  data(){
    return{
      database,

    }
  }
}
</script>

<style scoped lang="scss">

</style>