<template>
    <Banner />

    <Main /> 
</template>

<script>
import stars from '@/Starwars.js'
import Banner from '@/components/Banner.vue'
import Main from '@/components/Main.vue'

export default {
  components: {
    Banner,
    Main
  },
  data () {
    return {
      planets : stars.planets,
    }
  }
}
</script>

<style> 
    .img--banner{
         max-width: 100%;
         margin: 0;
         padding: 0;
    }
</style>
