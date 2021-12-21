<template>
  <div>
      <ul>
          <li>titolo: {{(contentobj.title != undefined) ? contentobj.title : contentobj.name}}</li>
          <li>Titolo Originale:  {{(contentobj.original_title != undefined) ? contentobj.original_title : contentobj.original_name}}</li>
          <li v-if="(contentobj.original_language).length > 4">Lingua: <img :src="contentobj.original_language" alt=""></li>
          <li v-else>Lingua:{{contentobj.original_language}}</li>
          <li>Voto:  {{contentobj.vote_average}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'Box',
    props: {
        contentobj: Object
    },
    components:{
    },
    data(){
        return{
        }
    },
}
</script>

<style scoped lang="scss">
img {
    width: 17px;
}
</style>