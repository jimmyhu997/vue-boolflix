<template>
  <div>
      <ul>
          <li>titolo: {{contentobj.title}}</li>
          <li>Titolo Originale:  {{contentobj.original_title}}</li>
          <li>Lingua:  {{contentobj.original_language}}</li>
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
    }
}
</script>

<style scoped lang="scss">

</style>