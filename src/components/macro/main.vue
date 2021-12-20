<template>
  <div>
      <Boxcontainer/>
  </div>
</template>

<script>
import Boxcontainer from '../section/boxContainer.vue'
export default {
  name: 'Main',
  components:{
    Boxcontainer,
    
  },
  data(){
    return{
      test:0
    }
  },

}
</script>

<style scoped lang="scss">

</style>